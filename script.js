let script = [
    { "normal": "Forms FORM-29827281-12:" },
    { "normal": "Test Assessment Report" },
    { "break": "" },
    { "break": "" },
    { "pause": "2500" },
    { "normal": "This was a triumph." },
    { "pause": "2000" },
    { "normal": "I'm making a note here:" },
    { "slow": "HUGE SUCCESS." },
    { "pause": "1500" },
    { "normal": "It's hard to overstate" },
    { "normal": "my satisfaction." },
    { "pause": "3000" },
    { "logo-show": "aperture" },
    { "normal": "Aperture Science" },
    { "pause": "2500" },
    { "normal": "We do what we must" },
    { "normal": "because we can." },
    { "pause": "2000" },
    { "normal": "For the good of all of us." },
    { "normal": "Except the ones who are dead." },
    { "break": "" },
    { "normal": "But there's no sense crying" },
    { "normal": "over every mistake." },
    { "fast": "You just keep on trying" },
    { "normal": "till you run out of cake." },
    { "logo-hide": "aperture" },
    { "logo-show": "atom" },
    { "normal": "And the Science gets done." },
    { "normal": "And you make a neat gun." },
    { "logo-hide": "atom" },
    { "logo-show": "aperture" },
    { "fast": "For the people who are" },
    { "slow": "still alive." },
    { "pagebr": "" },
    //2. oldal
    { "normal": "Forms FORM-55551-5:" },
    { "normal": "Personnel File Addendum:" },
    { "break": "" },
    { "normal": "Dear <<Subject Name Here>>," },
    { "break": "" },
    { "normal": "I'm not even angry." },
    { "pause": "2000" },
    { "normal": "I'm being so sincere right now." },
    { "pause": "2000" },
    { "normal": "Even though you broke my heart." },
    { "pause": "500" },
    { "logo-hide": "aperture" },
    { "logo-show": "heart" },
    { "normal": "And killed me." },
    { "pause": "2000" },
    { "logo-hide": "heart" },
    { "logo-show": "explosion" },
    { "normal": "And tore me to pieces." },
    { "pause": "2000" },
    { "normal": "And threw every piece into a fire." },
    { "logo-hide": "explosion" },
    { "logo-show": "fire" },
    { "pause": "2000" },
    { "normal": "As they burned it hurt because" },
    //{ "pause": "2000"},
    { "logo-hide": "fire" },
    { "logo-show": "checkmark" },
    { "normal": "I was so happy for you!" },
    { "normal": "Now these points of data" },
    { "normal": "make a beautiful line." },
    { "normal": "And we're out of beta." },
    { "normal": "We're releasing on time." },
    { "logo-hide": "checkmark" },
    { "logo-show": "explosion" },
    { "normal": "So I'm GLaD. I got burned." },
    { "logo-hide": "explosion" },
    { "logo-show": "atom" },
    { "normal": "Think of all the things we learned" },
    { "logo-hide": "atom" },
    { "logo-show": "aperture" },
    { "fast": "for the people who are" },
    { "slow": "still alive." },
    //3. oldal
    { "pagebr": "" },
    { "fast": "Forms FORM-55551-6:" },
    { "fast": "Personnel File Addendum Addendum:" },
    { "break": "" },
    { "slow": "One last thing:" },
    { "break": "" },
    { "pause": "1000" },
    { "normal": "Go ahead and leave me." },
    { "pause": "2000" },
    { "normal": "I think I prefer to stay inside." },
    { "pause": "2000" },
    { "normal": "Maybe you'll find someone else" },
    { "normal": "to help you." },
    { "pause": "3000" },
    { "normal": "Maybe Black Mesa..." },
    { "logo-hide": "aperture" },
    { "logo-show": "blackmesa" },
    { "pause": "2000" },
    { "normal": "THAT WAS A JOKE. HA HA. FAT CHANCE." },
    { "pause": "2000" },
    { "logo-hide": "blackmesa" },
    { "logo-show": "cake" },
    { "normal": "Anyway, this cake is great." },
    { "normal": "It's so delicious and moist." },
    { "logo-hide": "cake" },
    { "logo-show": "glados" },
    { "normal": "Look at me still talking" },
    { "logo-hide": "glados" },
    { "logo-show": "radiation" },
    { "normal": "when there's Science to do." },
    { "logo-hide": "radiation" },
    { "logo-show": "aperture" },
    { "normal": "When I look out there," },
    { "fast": "it makes me GLaD I'm not you." },
    { "logo-hide": "aperture" },
    { "logo-show": "atom" },
    { "fast": "I've experiments to run." },
    { "logo-hide": "atom" },
    { "logo-show": "explosion" },
    { "fast": "There is research to be done." },
    { "logo-hide": "explosion" },
    { "logo-show": "aperture" },
    { "fast": "On the people who are" },
    { "slow": "still alive." },
    { "pagebr": "" },
    //4. oldal
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "pause": "1000" },
    { "normal": "PS: And believe me I am" },
    { "normal": "still alive." },
    { "normal": "PPS: I'm doing Science and I'm" },
    { "normal": "still alive." },
    { "pause": "1000" },
    { "normal": "PPPS: I feel FANTASTIC and I'm" },
    { "normal": "still alive." },
    { "break": "" },
    { "normal": "FINAL THOUGHT:" },
    { "pause": "500" },
    { "normal": "While you're dying I'll be" },
    { "normal": "still alive." },
    { "break": "" },
    { "normal": "FINAL THOUGHT PS:" },
    { "pause": "1000" },
    { "normal": "And when you're dead I will be" },
    { "normal": "still alive." },
    { "break": "" },
    { "pause": "500" },
    { "normal": "STILL ALIVE" },
]

let s = 0;
//let txt = 'Forms FORM-29827281-12:';
let speed;
let i = 0;
let pause = 0;

function typeWriter() {
    let text = script[s];

    let modeSelect;
    let txt;

    if (text != undefined) {
        modeSelect = Object.keys(text)[0];
        txt = Object.values(text)[0];
    } else
        return;


    switch (modeSelect) {
        case "fast":
            speed = 40;
            break;
        case "normal":
            speed = 80;
            break;
        case "slow":
            speed = 130;
            break;
        case "break":
            //speed = 100;
            s++;
            $("#cursor").before("<br>");
            setTimeout(typeWriter, speed);
            return;
        case "pause":
            if (checkBrowser() == "chrome")
                pause = txt * 1.2;
            else
                pause = txt;

            setTimeout(nextLine, pause);
            return;
        case "logo-show":
            $(`#${txt}`).show();
            console.log("Shown logo => " + txt)
            nextLine();
            return;
        case "logo-hide":
            $(`#${txt}`).hide();
            console.log("Hidden logo => " + txt)
            nextLine();
            return;
        case "pagebr":
            $("#typeWriter").html(`<span id="cursor"></span>`);
            nextLine();
            return;
        default:
            speed = 100;
            break;
    }

    if (i < txt.length) {
        //document.getElementById("typeWriter").innerHTML += txt.charAt(i);
        $("#cursor").before(txt.charAt(i));
        i++;
        if (i == txt.length)
            //document.getElementById("typeWriter").innerHTML += "<br>";
            $("#cursor").before("<br>");

        setTimeout(typeWriter, speed);
    } else {
        i = 0;
        nextLine();
    }

}

let personnels = [
    { "pause": "10000" },
    { "normal": ">LIST PERSONNEL" },
    { "break": "" },
    { "break": "" },
    { "fast": "Gautam Babbar" },
    { "fast": "Ted Backman" },
    { "fast": "Kelly Bailey" },
    { "fast": "Jeff Ballinger" },
    { "fast": "Aaron Barber" },
    { "fast": "Jeep Barnett" },
    { "fast": "Jeremy Bennett" },
    { "fast": "Dan Berger" },
    { "fast": "Yahn Bernier" },
    { "fast": "Ken Birdwell" },
    { "fast": "Derrick Birum" },
    { "fast": "Mike Blaszczak" },
    { "fast": "Testyn Bleasdale-Shepherd" },
    { "fast": "Chris Bokitch" },
    { "fast": "Steve Bond" },
    { "fast": "Matt Boone" },
    { "fast": "Antoine Bourdon" },
    { "fast": "Jamaal Bradley" },
    { "fast": "Jason Brashill" },
    { "fast": "Charlie Brown" },
    { "fast": "Charlie Burgin" },
    { "fast": "Andrew Burke" },
    { "fast": "Augusta Butlin" },
    { "fast": "Julie Caldwell" },
    { "fast": "Dario Casali" },
    { "fast": "Chris Chin" },
    { "fast": "Jess Cliffe" },
    { "fast": "Phil Co" },
    { "fast": "John Cook" },
    { "fast": "Christen Coomer" },
    { "fast": "Greg Coomer" },
    { "fast": "Scott Dalton" },
    { "fast": "Kerry Davis" },
    { "fast": "Jason Deakins" },
    { "fast": "Joe Demers" },
    { "fast": "Ariel Diaz" },
    { "fast": "Quintin Doroquez" },
    { "fast": "Jim Dose" },
    { "fast": "Chris Douglass" },
    { "fast": "Laura Dubuk" },
    { "fast": "Mike Dunkle" },
    { "fast": "Mike Durand" },
    { "fast": "Mike Dussault" },
    { "fast": "Dhabih Eng" },
    { "fast": "Katie Engel" },
    { "fast": "Chet Faliszek" },
    { "fast": "Adrian Finol" },
    { "fast": "Bill Fletcher" },
    { "fast": "Moby Francke" },
    { "fast": "Stephane Gaudette" },
    { "fast": "Kathy Gehrig" },
    { "fast": "Vitaliy Genkin" },
    { "fast": "Paul Graham" },
    { "fast": "Chris Green" },
    { "fast": "Chris Grinstead" },
    { "fast": "John Guthrie" },
    { "fast": "Aaron Halifax" },
    { "fast": "Reagan Halifax" },
    { "fast": "Leslie Hall" },
    { "fast": "Jeff Hameluck" },
    { "fast": "Joe Han" },
    { "fast": "Don Holden" },
    { "fast": "Jason Holtman" },
    { "fast": "Gray Horsfield" },
    { "fast": "Keith Huggins" },
    { "fast": "Jim Hughes" },
    { "fast": "Jon Huisingh" },
    { "fast": "Brian Jacobson" },
    { "fast": "Lars Jensvold" },
    { "fast": "Erik Johnson" },
    { "fast": "Jakob Jungels" },
    { "fast": "Rich Kaethler" },
    { "fast": "Steve Kalning" },
    { "fast": "Aaron Kearly" },
    { "fast": "Iikka Keranen" },
    { "fast": "David Kircher" },
    { "fast": "Eric Kirchmer" },
    { "fast": "Scott Klintworth" },
    { "fast": "Alden Kroll" },
    { "fast": "Marc Laidlaw" },
    { "fast": "Jeff Lane" },
    { "fast": "Tim Larkin" },
    { "fast": "Dan LeFree" },
    { "fast": "Isabelle LeMay" },
    { "fast": "Tom Leonard" },
    { "fast": "Jeff Lind" },
    { "fast": "Doug Lombardi" },
    { "fast": "Bianca Loomis" },
    { "fast": "Richard Lord" },
    { "fast": "Realm Lovejoy" },
    { "fast": "Randy Lundeen" },
    { "fast": "Scott Lynch" },
    { "fast": "Ido Magal" },
    { "fast": "Nick Maggiore" },
    { "fast": "John McCaskey" },
    { "fast": "Patrick McClard" },
    { "fast": "Steve McClure" },
    { "fast": "Hamish McKenzie" },
    { "fast": "Gary McTaggart" },
    { "fast": "Jason Mitchell" },
    { "fast": "Mike Morasky" },
    { "fast": "John Morello II" },
    { "fast": "Bryn Moslow" },
    { "fast": "Arsenio Navarro" },
    { "fast": "Gabe Logan Newell" },
    { "fast": "Milton Ngan" },
    { "fast": "Jake Nicholson" },
    { "fast": "Martin Otten" },
    { "fast": "Nick Papineau" },
    { "fast": "Karen Prell" },
    { "fast": "Bay Raitt" },
    { "fast": "Tristan Reidford" },
    { "fast": "Alfred Reynolds" },
    { "fast": "Matt Rhoten" },
    { "fast": "Garret Rickey" },
    { "fast": "Dave Riller" },
    { "fast": "Elan Ruskin" },
    { "fast": "Matthew Russell" },
    { "fast": "Jason Ruymen" },
    { "fast": "David Sawyer" },
    { "fast": "Marc Scaparro" },
    { "fast": "Wade Schin" },
    { "fast": "Matthew Scott" },
    { "fast": "Aaron Seeler" },
    { "fast": "Jennifer Seeley" },
    { "fast": "Taylor Sherman" },
    { "fast": "Eric Smith" },
    { "fast": "Jeff Sorensen" },
    { "fast": "David Speyrer" },
    { "fast": "Jay Stelly" },
    { "fast": "Jeremy Stone" },
    { "fast": "Eric Strand" },
    { "fast": "Kim Swift" },
    { "fast": "Kelly Thornton" },
    { "fast": "Eric Twelker" },
    { "fast": "Carl Uhlman" },
    { "fast": "Doug Valente" },
    { "fast": "Bill Van Buren" },
    { "fast": "Gabe Van Engel" },
    { "fast": "Alex Vlachos" },
    { "fast": "Robin Walker" },
    { "fast": "Joshua Weier" },
    { "fast": "Andrea Wicklund" },
    { "fast": "Greg Winkler" },
    { "fast": "Erik Wolpaw" },
    { "fast": "Doug Wood" },
    { "fast": "Matt T. Wood" },
    { "fast": "Danika Wright" },
    { "fast": "Matt Wright" },
    { "fast": "Shawn Zabecki" },
    { "fast": "Torsten Zabka" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "'Still Alive' by:" },
    { "fast": "Jonathan Coulton" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Voices:" },
    { "fast": "Ellen McLain - GlaDOS, Turrets" },
    { "fast": "Mike Patton - THE ANGER SPHERE" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Voice Casting:" },
    { "fast": "Shana Ladsburg \ Teri Fiddleman" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Voice Recording:" },
    { "fast": "Pure Audio, Seattle, WA" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Voice Recording" },
    { "fast": "scheduling and logistics:" },
    { "fast": "Pat Cockburn, Pure Audio" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Translations:" },
    { "fast": "SDL" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "normal": "Crack Legal Team:" },
    { "normal": "Liam Lavery" },
    { "normal": "Karl Quackenbush" },
    { "normal": "Kristen Boraas" },
    { "normal": "Kevin Rosenfield" },
    { "normal": "Alan Bruggerman" },
    { "normal": "Denis Tessier" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Thanks for the user of ther face:" },
    { "fast": "Alesia Glidewell - Chell" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "normal": "Special thanks to everyone at:" },
    { "normal": "Alienware" },
    { "normal": "ATI" },
    { "normal": "Dell" },
    { "normal": "Falcon Northwest" },
    { "normal": "Havok" },
    { "normal": "SOFTIMAGE" },
    { "normal": "and Don kemmis, SLK Technologies" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "THANK YOU FOR PRATICIPATING" },
    { "fast": "IN THIS" },
    { "fast": "ENRICHMENT CENTER ACTIVITY!!" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
];

let k = 0;
let p = 0;
function personnelTypeWriter() {
    let text = personnels[p];
    let modeSelect;
    let txt;

    if (text != undefined) {
        modeSelect = Object.keys(text)[0];
        txt = Object.values(text)[0];
    } else
        return;


    switch (modeSelect) {
        case "fast":
            speed = 60;
            //speed = 2000;
            break;
        case "normal":
            speed = 80;
            break;
        case "break":
            //speed = 100;
            p++;
            $("#cursor2").before("<br class='break'>");
            setTimeout(personnelTypeWriter, speed);
            return;
        case "pause":
            pause = txt;
            //s++;
            setTimeout(personnelNextLine, pause);
            return;
        default:
            speed = 100;
            break;
    }

    if (k < txt.length) {
        $("#cursor2").before(txt.charAt(k));
        k++;
        if (k == txt.length)
            $("#cursor2").before("<br>");

        setTimeout(personnelTypeWriter, speed);
    } else {
        k = 0;
        personnelNextLine();
    }
}

function nextLine() {
    s++;
    typeWriter();
}
function personnelNextLine() {
    p++;
    personnelTypeWriter();
}

let cursor = false;
function blinkingCursor() {
    cursor = !cursor;
    if (cursor) {
        $("#cursor").html("_");
    } else {
        $("#cursor").html("&#8203");
    }
    setTimeout(blinkingCursor, speed * 5);
}
var audio
$(document).ready(function () {
    audio = new Audio('still_alive.mp3');
});
function playMusic() {
    audio.volume = 0.5;
    audio.play();
}

function checkBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return "chrome";
    }
    else if (navigator.userAgent.indexOf("Edg") != -1) {
        return "chrome";
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return "chrome";
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return "firefox";
    }
    else {
        return "unknown";
    }
}