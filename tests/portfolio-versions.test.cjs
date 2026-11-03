const { test } = require('node:test');
const assert = require('node:assert/strict');

const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:3000';
async function page(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  return response.text();
}

for (const [version, pillars] of [['v3', 3], ['rsch', 4]]) {
  test(`${version}: shareable home renders the correct presentation and section order`, async () => {
    const html = await page(`/?version=${version}`);
    const main = html.split('<main')[1].split('</main>')[0];
    assert.ok(main.includes(`data-portfolio-version="${version}"`));
    assert.equal((main.match(/class="hero-area group /g) || []).length, pillars);
    assert.ok(main.includes('Across disciplines. One engineering perspective.'));
    const science = main.indexOf('id="academic-service"');
    const experience = main.indexOf('id="experience"');
    const about = main.indexOf('id="about"');
    assert.ok(science >= 0 && experience >= 0 && about >= 0);
    assert.ok(version === 'v3' ? science > about : science < experience);
    const projectLinks = [...main.matchAll(/href="(\/projects\/[^"#]+)"/g)];
    assert.ok(projectLinks.length > 0);
    assert.ok(projectLinks.every(([, href]) => new URL(href, base).searchParams.get('version') === version));
  });

  test(`${version}: opening a case and returning to the portfolio preserves the version`, async () => {
    const html = await page(`/projects/hip-exoskeleton-kinematics?version=${version}`);
    assert.ok(html.includes(`data-portfolio-version="${version}"`));
    assert.ok(html.includes(`href="/?version=${version}#projects"`));
    assert.ok(html.includes(`href="/?version=${version}#experience"`));
  });

  test(`${version}: personal study is discoverable and keeps its concept status and return path`, async () => {
    const home = await page(`/?version=${version}`);
    const section = home.split('id="personal-projects"')[1].split('</section>')[0];
    assert.ok(section.includes('Research concept'));
    assert.ok(section.includes(`/personal-projects/kpop-role-atlas?version=${version}`));
    const study = await page(`/personal-projects/kpop-role-atlas?version=${version}`);
    assert.ok(study.includes(`data-portfolio-version="${version}"`));
    assert.ok(study.includes(`href="/?version=${version}#personal-projects"`));
    assert.ok(study.includes('does not report a collected dataset'));
    assert.ok(study.includes('Interpretation matters'));
  });
}

test('unknown personal project returns 404', async () => {
  assert.equal((await fetch(new URL('/personal-projects/does-not-exist', base))).status, 404);
});

test('default and unknown version use RSCH', async () => {
  for (const path of ['/', '/?version=unknown']) {
    assert.ok((await page(path)).includes('data-portfolio-version="rsch"'));
  }
});
