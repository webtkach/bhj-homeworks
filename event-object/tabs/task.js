document.addEventListener('DOMContentLoaded', () => {
  const tabsBlocks = document.querySelectorAll('.tabs');

  tabsBlocks.forEach(block => {
    const tabs = block.querySelectorAll('.tab');
    const contents = block.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        const activeTab = block.querySelector('.tab_active');
        const activeContent = block.querySelector('.tab__content_active');

        if (activeTab) activeTab.classList.remove('tab_active');
        if (activeContent) activeContent.classList.remove('tab__content_active');

        tab.classList.add('tab_active');
        contents[index].classList.add('tab__content_active');
      });
    });
  });
});