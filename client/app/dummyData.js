const skills = [
  {
    'name': 'java',
    'count': '3'
  },
  {
    'name': 'html',
    'count': '12'
  },
  {
    'name': 'reactjs',
    'count': '4'
  }
];

const $addSkill = $('#addSkill');
const $here = $('.here');
$('document').ready(preLoad);

function preLoad() {
  skills.forEach(skill => {
    $here.prepend(`<li>${skill.name}</li>`);
  });

}

$addSkill.click(() => {
  skills.unshift({'name': 'css', 'count': '2'});
  $here.prepend(`<li>${skills[0].name}</li>`);
});