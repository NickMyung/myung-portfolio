const {test}=require('node:test');
const assert=require('node:assert/strict');
const base=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:3072';
async function page(path){const res=await fetch(new URL(path,base));assert.equal(res.status,200,path);return res.text();}
for(const version of ['rsch','menu']){
 test(version+': selector offers RSCH and MENU with correct content distribution',async()=>{const html=await page('/?version='+version);const main=html.split('<main')[1].split('</main>')[0];assert.equal((main.match(/class="hero-area group /g)||[]).length,4);for(const value of ['rsch','menu'])assert.ok(html.includes('value="'+value+'"'));assert.ok(!html.includes('value="v3"'));assert.equal(main.includes('id="experience"'),version==='rsch');assert.equal(main.includes('id="academic-service"'),version==='rsch');assert.equal(main.includes('id="publications"'),version==='rsch');});
 test(version+': professional case keeps the right layout and return destination',async()=>{const html=await page('/projects/hip-exoskeleton-kinematics?version='+version);const back=version==='menu'?'/work?version=menu#projects':'/?version=rsch#projects';assert.ok(html.includes('href="'+back+'"'));assert.ok(html.includes(version==='menu'?'data-portfolio-layout="menu"':'data-portfolio-version="rsch"'));});
 test(version+': personal concept keeps its collection return link',async()=>{const html=await page('/personal-projects/kpop-role-atlas?version='+version);assert.ok(html.includes('does not report a collected dataset'));assert.ok(html.includes('href="'+(version==='menu'?'/personal?version=menu#personal-projects':'/?version=rsch#personal-projects')+'"'));});
}
test('default, old V3 and unknown comparison requests fall back to RSCH',async()=>{for(const path of ['/','/?version=v3','/?version=unknown'])assert.ok((await page(path)).includes('data-portfolio-version="rsch"'));});
test('unknown project returns 404',async()=>assert.equal((await fetch(new URL('/personal-projects/not-a-project',base))).status,404));
