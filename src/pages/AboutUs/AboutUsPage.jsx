import './AboutUs.css'
import { link } from 'react-router-dom'

export default function AboutUs() {

    return (
        <>
            <h1 className="MTT" class="text-5xl mb-9 font-bold text-center">MEET THE TEAM</h1>
            <p className='statement'>"Finding and applying to grants is an extremely complicated and overwhelming process, especially for new applicants. Grant applicants need a centralized way to find available grants as well as someone to talk to in regards to their needs for environmental remediation projects.
                <br></br>
                <br></br>
                This website was made through the collaborative effort of UX, software engineering, and data teams to help lower resourced communities find grants through open-sourced federal data.</p>
            <div class="grid grid-cols-6 gap-4 mb-5 w-full ">
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/1zdkTjgW/Maroof-Khan.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Maroof Khan
                        </h2>
                        <p class="text-purple-700 mb-2">Project Manager</p>
                        <a target="_blank" href="https://docs.google.com/document/d/12OxfLDuqnSRqCQCRge0rDAbROxvRsPly/edit?usp=sharing&ouid=104996811496199836703&rtpof=true&sd=true" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/maroofkhn/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/dVdc7TBW/Justin-Hed-Rick.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Justin Hedrick
                        </h2>
                        <p class="text-purple-700 mb-2">Lead Software Engineer</p>
                        <a target="_blank" href="https://docs.google.com/document/d/1ojnUeFmdj7Y3M7O75AemoIa20SYmxjYC/edit?usp=sharing&ouid=104996811496199836703&rtpof=true&sd=true" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/justin-c-hedrick/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/ZKjqWJBX/Gaby-Hernandez.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Gaby Hernandez
                        </h2>
                        <p class="text-purple-700 mb-2">Full Stack Engineer</p>
                        <a target="_blank" href="https://docs.google.com/document/d/1b9msxUb-CirvWf5vduOMp05vUWqEI3-sG0XKp92ysPs/edit?usp=sharing" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/gabyhernandez3/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/Z59KwRL3/Roger-Roger.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Roger Davila
                        </h2>
                        <p class="text-purple-700 mb-2">Full Stack Engineer</p>
                        <a target="_blank" href="https://docs.google.com/document/d/1Jb9BsJ9np4Dzh3Npds2FesMxnCW7dchiTjlOvoHVkCY/edit?usp=sharing" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/roger-davila/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/RVkjzZBw/Hitesh-Deo.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Hitesh Doe
                        </h2>
                        <p class="text-purple-700 mb-2">Full Stack Engineer</p>
                        <a target="_blank" href="https://docs.google.com/document/d/1tHkr73Aktw-whL4-R3P26PI5pyrc-Cm62P_3ftLxcNs/edit" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/tesh-deo94/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                    </div>
                </div>


            </div>
            <div class="grid grid-cols-6 gap-4 mb-8 w-full ">
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/zDMQnG34/Rachel-Choi.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Rachel Choi
                        </h2>
                        <p class="text-purple-700 mb-2">UX/UI Lead</p>
                        <a target="_blank" href="https://drive.google.com/file/d/11lDl0YMOUx8XePUlJ3NywbGuCrxBjOT0/view" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/rachel-choi-/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/DwCpwfVC/Nicolette-Meyer.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Nicolette Meyer
                        </h2>
                        <p class="text-purple-700 mb-2">UX/UI Researcher</p>
                        <a target="_blank" href="https://drive.google.com/file/d/1qkh9-9Lgag8BYJ2RO8jaHOb4U8giQtC8/view" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/nicolettemeyer/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/Kv67j761/Rebecca-Lin.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Rebecca Lin
                        </h2>
                        <p class="text-purple-700 mb-2">UX/UI Designer</p>
                        <a target="_blank" href="https://storage.googleapis.com/uxfolio/61d8ced5ea3b130003a6615c/cv/Rebecca_Lin_UXR_2022_SbW.pdf" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/rebeccaglin/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/Kcn3QXw8/Lamiya-Bodian.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Lamiya Bodian
                        </h2>
                        <p class="text-purple-700 mb-2">UX/UI Researcher</p>
                        <a target="_blank" href="https://drive.google.com/file/d/1wt4HryYupWxE1iqAhvXnGahrZdcUcoyQ/view" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/lamiyabodian/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/ZY7WH1hG/Kajsa-Brown.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Kajsa Brown
                        </h2>
                        <p class="text-purple-700 mb-2">UX/UI Researcher</p>
                        <a target="_blank" href="https://drive.google.com/file/d/1mdytD0CKCsmYXwKKGdMuOoIK7Jt0xcmC/view" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/kajsabrown/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/N0kMHn4P/Shihchiao-Joe-Chao.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Shihchiao Chao
                        </h2>
                        <p class="text-purple-700 mb-2">UX/UI Designer</p>
                        <a target="_blank" href="https://drive.google.com/file/d/1PJu9L9LrZlUanqqoE7OpoI3Hf5YqUkIx/view" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/joechao-designer/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                    </div>
                </div>

            </div>
            <div class="grid grid-cols-6 gap-4 mb-8 w-full ">
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/yN1Kw8mv/Sara-Smithers.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Sara Smithers
                        </h2>
                        <p class="text-purple-700 mb-2">Data Lead</p>
                        <a target="_blank" href="https://b4e1262c-de54-419d-ab9e-19ad06d9e789.filesusr.com/ugd/4e6baa_42189ff105d946dfaaa9957754e59aa3.pdf" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/sara-smithers/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/kXJNbXGm/Angie-Marchany-Rivera.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Angie Marchany-Rivera
                        </h2>
                        <p class="text-purple-700 mb-2">Data Analyst</p>

                        <a target="_blank" href="https://docs.google.com/document/d/1TUGRFor_PHrcTlM9xLaQMmQDhsCdcSSPBOjuK67dOxI/edit?usp=sharing" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/angie-marchany-rivera/" class="text-purple-600 hover:text-purple-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>


                    </div>
                </div>
            </div>


            <h1 className='thanks' >Thank You</h1>
            <h2 className='message'>A special thank you to The Opportunity Project 2022, General Assembly, and the US Census Bureau for creating this chance for us to showcase our skills. We made a product that we are proud of that we believe will help people interested in applying for environmental remediation grants.</h2>

            <h1 className='general'>General Assembly</h1>
            <div class="grid grid-cols-4 gap-4 mb-8 w-full ">
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/WpWm0ckq/Becca-Rogers.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Becca Rogers
                        </h2>
                        <p class="text-purple-700 mb-2">GA Product Club Host</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/7YJz7G4j/Tommy-Peterson.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Tommy Peterson
                        </h2>
                        <p class="text-purple-700 mb-2">GA Product Club Host</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/k5TGLq9x/Victoria-Kanicka.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Victoria Kenicka
                        </h2>
                        <p class="text-purple-700 mb-2">Software Engineering Mentor</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/ZRgPNX7h/Lindsey-Dortch.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Lindsey Dortch
                        </h2>
                        <p class="text-purple-700 mb-2">Software Engineering Mentor</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/8PgMVRxw/Kenneth-Rowe.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Kenneth Rowe
                        </h2>
                        <p class="text-purple-700 mb-2">UX Design Mentor</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/Pq7vVYmW/Jamie-Magruder.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Jamie Magruder
                        </h2>
                        <p class="text-purple-700 mb-2">UX Design Mentor</p>
                    </div>
                </div>


                {/* TOP LEADERS */}
            </div>
            <h1 className='top'>TOP Leaders</h1>
            <div class="grid grid-cols-4 gap-4 mb-8 w-full ">
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/G3M7bhkH/Justin-Cole.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Justin Cole
                        </h2>
                        <p class="text-purple-700 mb-2">TOP Organizer, Data Steward</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/KjVDBjNf/Meredith-Brown.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Meredith Brown
                        </h2>
                        <p class="text-purple-700 mb-2">TOP Organizer</p>
                    </div>

                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/RZbJ0yg1/Denice-Ross.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Denice Ross
                        </h2>
                        <p class="text-purple-700 mb-2">TOP Organizer</p>
                    </div>

                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/TPLL50sz/Oliver-Wise.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Oliver Wise
                        </h2>
                        <p class="text-purple-700 mb-2">TOP Organizer</p>
                    </div>

                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/XqyCM8fK/Deelip-Mhaske.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Deelip Mhaske
                        </h2>
                        <p class="text-purple-700 mb-2">TOP User Advocate</p>
                    </div>

                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/HsX6X0q7/Caroline-George.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Caroline George
                        </h2>
                        <p class="text-purple-700 mb-2">TOP User Advocate</p>
                    </div>

                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/J0WkLXP9/Adie-Tomer.jpg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">Adie Tomer
                        </h2>
                        <p class="text-purple-700 mb-2">TOP User Advocate</p>
                    </div>


                </div>


            </div>
            {/* <div class="p-20  w-full md:w-1/2"> */}
            {/* <h3 class="text-purple-300 font-bold mb-4">2. Card with image</h3> */}
            {/* <div class="bg-white rounded-lg shadow-lg">
        <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" class="rounded-t-lg" />
        <div class="p-6">
          <h2 class="font-bold mb-2 text-2xl text-purple-800">Justin Hendrick
          </h2>
          <p class="text-purple-700 mb-2">Lead Software Engineer</p>
          <a href="#" class="text-purple-600 hover:text-purple-500 underline text-sm">Download Resume</a>
        </div> */}

            {/* </div> */}
            {/* </div> */}
        </>
    )
}