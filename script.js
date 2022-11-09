const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

let info;
let heading;

const dockerData = `Docker, a subset of the Moby project, is a software framework for building,
running, and managing containers on servers and the cloud. 
The term "docker" may refer to either the tools (the commands and a daemon) or
to the Dockerfile file format. It used to be that when you wanted to
run a web application, you bought a server, installed Linux, set up a LAMP stack,
and ran the app. If your app got popular, you practiced good load balancing
by setting up a second server to ensure the application wouldn't crash from too much traffic.`;

const gitData = `Git is free and open source software for distributed version control: tracking changes
in any set of files, usually used for coordinating work among programmers collaboratively
developing source code during software development. Its goals include speed, data integrity,
and support for distributed, non-linear workflows (thousands of parallel branches
running on different systems).
            Git was originally authored by Linus Torvalds in 2005 for development of the Linux kernel,
with other kernel developers contributing to its initial development.
Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems
and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with
complete history and full version-tracking abilities, independent of network access or a central server.
Git is free and open-source software distributed under the GPL-2.0-only license.`;

const goLangData = `Go is a statically typed, compiled programming language designed at Google by Robert Griesemer,
Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection,
structural typing and CSP-style concurrency. It is often referred to as Golang because
of its former domain name, golang.org, but its proper name is Go. There are two major implementations:

Google's self-hosting "gc" compiler toolchain, targeting multiple operating systems and WebAssembly.
gofrontend, a frontend to other compilers, with the libgo library. With GCC the combination is gccgo; with LLVM the combination is gollvm.[18][a]
A third-party source-to-source compiler, GopherJS compiles Go to JavaScript for front-end web development.`;

const showClass = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideClass = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++){
  btnsOpenModal[i].addEventListener('click', () => {
    switch(btnsOpenModal[i].textContent){
      case 'Docker':
        info = dockerData;
        heading = 'Docker';
        break;
      case 'Git':
        info = gitData;
        heading = 'Git';
        break;
      case 'GoLang':
        info = goLangData;
        heading = 'GoLang';
        break;
    };
    document.querySelector('.heading').textContent = heading;
    document.querySelector('.info').textContent = info;

    showClass();
  });
};

btnCloseModal.addEventListener('click', hideClass);
overlay.addEventListener('click', hideClass);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hideClass();
  }
})