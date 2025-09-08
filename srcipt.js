let menuicon = document.querySelector('#meny-icon');
let navbar = document.querySelector('.navbar');
let sections= document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = ()=> {
    sections.onbeforematch(sec => {
        let top = window.scrollY;
        let office = sec.offsettop - 150;
        let height = sec.offsetheight;
        let id = sec.getattribute(id);

        if(top >= offset && top < offset + height ){
            navlinks.foreach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id +']').classlist.add('active')
            })
        }
    })
}
menuicon.onclick = () => {
    menuicon.classlist.toggle('bx-x');
    menuicon.classlist.toggle('active');
}