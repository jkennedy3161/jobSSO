const skills = [
  {
    'name': 'java',
    'count': '0'
  },
  {
    'name': 'html',
    'count': '0'
  },
  {
    'name': 'reactjs',
    'count': '0'
  }
];

const $addSkill = $('#addSkill');
const $skill = $('.skill');
const $count = $('.count');
$('document').ready(preLoad, () => {

});

function preLoad() {
  skills.forEach((skill, i) => {
    $skill.prepend(`<li id=${i}>${skill.name}</li>`);
    $count.prepend(`<li id=${i}>${skill.count}</li>`);
  });
  $count.children().click((e) => {
    console.log(e);
    let c = Number(e.target.innerHTML, 2);
    c++;
    skills[e.target.id].count++;
    console.table(skills);
    $count.find(`li#${e.target.id}`).text(skills[e.target.id].count);
  });
}

$addSkill.click(() => {
  let name = $('#skill').val();
  skills.unshift({'name': name, 'count': '0'});
  $skill.prepend(`<li>${skills[0].name}</li>`);
  $count.prepend(`<li>${skills[0].count}</li>`);
  $('#skill').val('');
});

$('#save').click((e) => {
  console.table(skills);
});