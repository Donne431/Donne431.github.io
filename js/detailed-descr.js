function toggleContent(button) {
      const content = button.nextElementSibling;
      const prevcontent = button.previousElementSibling;
      content.classList.toggle('active');
      prevcontent.classList.toggle('active');
      button.textContent = content.classList.contains('active') ? 'Short description' : 'Detailed description';
    }