/**
 * Class Application
 *
 * @param {Application} object
 */
class Application {
  constructor (icon, name, link, target) {
    /* String : Path of the svg icon

    Directory and extension are already defined, please
    ONLY set the name file. */
    this.icon = icon
    // String : Name of the application
    this.name = name
    // String : Link to redirect
    this.link = link
    // Boolean : Should the link be opened in a new tab ?
    this.target = target
  }
}

const figma = new Application(
  'figma',
  'Figma',
  'https://www.figma.com/file/SZWyC97gtK3khQtp0NgFEE/OS-project?node-id=0%3A1',
  true
)
const github = new Application(
  'github',
  'Github',
  'https://github.com/ChrisBradford2/Venom-Linux'
)
const firefox = new Application(
  'firefox',
  'Firefox',
  'https://fonts.googleapis.com'
)

// Add the application in the array :
const applicationList = [github, figma, firefox]

function formdata () {
  const newFileName = document.getElementById('new-file-name').value
  console.log(newFileName)
  const newFile = new Application('file', newFileName, '#')
  console.log(newFile)
  applicationList.push(newFile)
  console.log(applicationList)

  // Storing data:
  const applicationJSON = JSON.stringify(newFile)
  localStorage.setItem('applicationText', applicationJSON)

  // Retrieving data:
  const text = localStorage.getItem('applicationText')
  const obj = JSON.parse(text)

  // Inject the div to application's list section.
  document.getElementById('application-list').innerHTML += `
  <div class="desktop--app-list--icon">
      <a href="${obj.link}">
          <img src="assets/icons/${obj.icon}.svg" alt="${obj.icon} text file application" />
          <p>${obj.name}.txt</p>
      </a>
  </div>
  `

  document.getElementById('modal-new-file').style.display = 'none'
}

applicationList.forEach(function (application) {
  // Storing data:
  const applicationJSON = JSON.stringify(application)
  localStorage.setItem('applicationItem', applicationJSON)

  // Retrieving data:
  const text = localStorage.getItem('applicationItem')
  const obj = JSON.parse(text)

  // Set condition of the target="_blank".
  let blank
  if (obj.target === true) {
    blank = 'target="_blank"'
  } else {
    blank = ''
  }

  // Inject the div to application's list section.
  document.getElementById('application-list').innerHTML += `
      <div class="desktop--app-list--icon">
          <a href="${obj.link}" ${blank}>
              <img src="assets/icons/${obj.icon}.svg" alt="${obj.icon} application" />
              <p>${obj.name}</p>
          </a>
      </div>
      `
})
