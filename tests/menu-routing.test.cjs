const {test}=require('node:test');
const assert=require('node:assert/strict');
const data=require('../portfolio_data.json');
const base=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:3071';
const version=process.env.PORTFOLIO_TEST_QUERY;
function pathFor(path){const url=new URL(path,base);if(version)url.searchParams.set('version',version);return url.pathname+url.search+url.hash;}
async function page(path){const response=await fetch(new URL(pathFor(path),base));assert.equal(response.status,200,path);return response.text();}
function main(html){return html.split('<main')[1].split('</main>')[0];}
test('MENU home is an overview with four pillars and three selected cases',async()=>{const html=main(await page('/'));assert.equal((html.match(/class="hero-area group /g)||[]).length,4);assert.equal((html.match(/Read case study/g)||[]).length,3);for(const id of ['experience','academic-service','publications','personal-projects'])assert.ok(!html.includes('id="'+id+'"'));});
test('each menu destination renders independently with one primary heading',async()=>{for(const [path,ids]of [['/work',['projects','expertise']],['/research',['academic-service','research','publications','simulator']],['/personal',['personal-projects']],['/about',['about','education','experience']],['/contact',['contact']]]){const html=main(await page(path));assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,path);for(const id of ids)assert.ok(html.includes('id="'+id+'"'),path+' '+id);}});
test('all professional cases return to work and preserve the chosen presentation',async()=>{for(const project of data.projects){const html=await page('/projects/'+project.id);const back=pathFor(project.business?'/work#projects-'+project.category:'/work#projects');assert.ok(html.includes('href="'+back+'"'),project.id);}});
test('personal study keeps concept status and returns to its own collection',async()=>{const html=await page('/personal-projects/kpop-role-atlas');assert.ok(html.includes('Research concept')||html.includes('RESEARCH CONCEPT'));assert.ok(html.includes('does not report a collected dataset'));assert.ok(html.includes('href="'+pathFor('/personal#personal-projects')+'"'));});
test('research links point to the routed simulator and capabilities',async()=>{const research=await page('/research');assert.ok(research.includes('href="'+pathFor('/work#expertise')+'"'));const project=await page('/projects/hip-exoskeleton-kinematics');assert.ok(project.includes('href="'+pathFor('/research#simulator')+'"'));});
test('unknown case is a 404',async()=>{assert.equal((await fetch(new URL(pathFor('/projects/not-a-project'),base))).status,404);});
