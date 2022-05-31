const myMenu = () => {
  const menu = document.querySelectorAll('.menu-item ');
  const contents = document.querySelectorAll('.page_content');
  // Display tabulation
  menu.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
      contents.forEach((content) => {
        content.classList.remove('active');
      });
      menu.forEach((menuItem) => {
        menuItem.classList.remove('active');
      });
      contents[index].classList.add('active');
      menu[index].classList.add('active');
    });
  });
};

export default myMenu;
