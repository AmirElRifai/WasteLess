class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white shadow-md">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="index.html" class="text-2xl font-bold text-primary">WasteLess</a>
          <nav class="space-x-6 text-gray-700 font-medium text-base">
            <a href="index.html" class="hover:text-primary">Home</a>
            <a href="features.html" class="hover:text-primary">Features</a>
            <a href="about.html" class="hover:text-primary">About</a>
            <a href="#" class="bg-primary text-white px-4 py-2 rounded-full hover:bg-green-700 transition">Get App</a>
          </nav>
        </div>
      </header>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
