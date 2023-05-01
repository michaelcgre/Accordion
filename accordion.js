var accordionHeaders = document.querySelectorAll(".accordion-header");

for (var i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener("click", function() {
    var accordionContent = this.nextElementSibling;
    var accordionSection = this.parentElement;
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      accordionSection.classList.add("collapsed");
      this.classList.remove("active");
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionSection.classList.remove("collapsed");
      this.classList.add("active");
    }
  });
}

const accordionSections = document.querySelectorAll('.my-accordion-section');

accordionSections.forEach(section => {
  const header = section.querySelector('.my-accordion-header');
  header.addEventListener('click', () => {
    const activeSection = document.querySelector('.my-active');
    if (activeSection && activeSection !== section) {
      activeSection.classList.remove('my-active');
      activeSection.classList.add('my-collapsed');
      activeSection.querySelector('.my-accordion-content').style.maxHeight = null;
    }
    section.classList.toggle('my-active');
    section.classList.toggle('my-collapsed');
    const content = section.querySelector('.my-accordion-content');
    content.style.maxHeight = section.classList.contains('my-active') ? content.scrollHeight + 'px' : null;
  });
});


