// get random name
let names = ["Jordan", "Charlie", "Dakota", "Emerson", "Finley", "Justice", "River", "Skyler", "Tatum"]

const random = Math.floor(Math.random() * names.length);
const selectedName = (random, names[random]);

var story = 0;
var form = document.getElementById('theAdventure');
var submit = document.getElementById("continueButton");
var reset = document.getElementById("resetButton");
var answer = " ";

var story_telling = {
    "start":{
        "question": "Time to begin your mediocre day. Do you:",
        "answers":{
            "a": "Get up when your alarm goes off",
            "b": "Hit the snooze",
            "c": "Contemplate your life choices that led up to this point",
        }
    },
    //get up with alarm*****
    "1_a": {
        "question": "You decide to get up with your alarm. As you sit on the edge of your bed you decide what you want to do this morning. Do you: ",
        "answers": {
            "a": "Go for a run. Gotta look good for " +selectedName+ " at the office", //potentially link this with a json file to pull a random womans name
            "b": "Get some reading done to keep your brain sharp",
            "c": "Make the same boring cup of coffee that you make every morning, and watch TikToks for a minute",
        }
    },

        //go for a run
        "2_a":{
            "question" : "You go for a run. By the time you hit the mile mark of your run, you feel sweaty and miserable, but you also feel a mild sense of accomplishment for doing something that's good for yourself. You hop in the shower, clean yourself off, and head to the kitchen for breakfast. What do you eat?",
            "answers": {
                "a": "You just burned a lot of calories. Maybe it's fine for you to eat leftover pizza for breakfast",
                "b": "Oats. You've been telling yourself for weeks that your finally going to make that healthy oats recipe you saw on TikTok",
                "c": "Make the same boring cup of coffee that you make every morning, and watch TikToks for a minute",
            }
        },

            //pizza for breakfast
            "3_a":{
                "question" : "You ate the leftover pizza in your fridge for breakfast. What is wrong with you? As you head to work, you feel bad that you 'ruined' your workout by eating something so terrible. You decide as you are driving that you are going to change your diet for the better. </br> The end.",
            },

            //oats
            "3_b": {
                "question": "You head out the door with the oats you just made in your hand. You eat them as you drive. It's a bad habit, but that's just the life you live. You accidentally spill the hot oats on yourself, crash your car, and you die. I guess that it's no longer the life you live.</br> The End",
            },

            //coffee
            "3_c": {
                "question": "You make that same stupid cup of coffee you always do. After taking the first sip, you think to yourself: 'Today isn't my day'. Seconds later you call in sick and spend the rest of the day sitting on the couch playing video games.</br> The End",
            },

        //read
        "2_b":{
            "question": "You walk over to your bookshelf to pick out a book. Which one do you choose?",
            "answers":{
                "d": "Devin the Dog: Tails of True Bravery",
                "e": "The Fall of the House of Usher and Other Tales by Edgar Allan Poe",
                "f": "George W Bush's Autobiography",
            }
        },

            //devin the dog
            "3_d": {
                "question": "Knowing full well that you picked a childrens book from off of your shelf to read, even though you don't have any children, you are filled with a sense of child-like wonder. You realize how much you hate your job, and you remember that as a kid you always told yourself that you wanted to be a garbage truck driver. Right away you pick up your phone, call your boss, and quite your job in order to persue your dreams of driving a smelly trash truck.</br> The End",
            },
            
            //poe
            "3_e": {
                "question": "Something has to be wrong with anybody who chooses to start their day by reading an Edgar Allen Poe book. Are you ok? I advise you to get help. I can give you a business card for my therapist if you would like. I'm just gonna end your day here before it gets any worse for you.",
            },

            //bush
            "3_f": {
                "question": "You read a few pages from the autobiography, and before you know it, you suddenly wake up on the floor. You fell asleep sitting on the edge of your bed while reading. It's a pretty boring book. You look at the clock and realize that you are now an hour late for work. Good book choice. </br>The End",
            },

        //boring coffee
        "2_c":{
            "question": "You make the same coffee that you always do, and without thinking open the TikTok app. You realize what your doing. What do you do?",
            "answers":{
                "g": "Close the TikTok app, and instead open the news app so you can see what is going on today",
                "h": "Tell yourself that you will only spend five minutes on TikTok this morning, and set a timer for five minutes",
                "i": "You allow yourself to get sucked in, just like you always do",
            }
        },

            //news
            "3_g": {
                "question": "As you read through the local news, you learn that your place of work burned to the ground overnight. You call your boss to see what the plan is, and he tells you that for the time being everybody gets paid time off until he can figure out what to do. You spend the rest of your day happily sitting on your couch playing video games. </br>The End",
            },
            
            //five minutes
            "3_h": {
                "question": "You scroll through TikToks for the next five minutes until your alarm goes off. You look at your watch and see that it's time to leave. You head out the door, get in your mediocre car, headed to your mediocre job, so you can earn a mediocre living, to support your mediocre lifestyle. </br>The (mediocre) End",
            },

            //you get sucked in
            "3_i": {
                "question": "You scroll mindlessly through TikToks, not really gleaning anything from any of them, and never finding the entertainment that you were told you would find before you downloaded the app. When you finally come out of your TikTok trance, you realize that it's been a full hour. You're very late for work. You get a call from your boss, you're fired. Oh well... At least you can watch more TikTok.</br> The End",
            },

    

    //hit the snooze*****
    "1_b": {
        "question": "You hit the snooze. That seems to be a pattern in your life. You roll over and enjoy an extra 8 minutes of sleep. Your alarm goes off again. What do you do?",
        "answers": {
            "d": "Lay in bed pretending that your alarm isn't going off until you can't stand it any longer, and you turn it off angrily",
            "e": "Turn your alarm off, and while your still in your bed you tell Alexa to turn on some jammin' beats to help motivate you to get out of bed",
            "f": "Hit that dang snooze button again. After all, that is your kryptonite",
        }
    },

        //lay in bed
        "2_d": {
            "question": "Now your feeling grumpy, and you realized that you layed in bed with your alarm going off for literally an hour. Yikes. Probably going to be late for work. What do you do?",
            "answers": {
                "j": "Call it a day. You started off bad, may as well go back to bed",
                "k": "Has time travel been invented yet? No? Then you should probably get in your car and start coming up with a good excuse for your boss",
                "l": "Donuts. Everybody loves donuts. Maybe if you bring donuts with you, your boss will forget that you were late to work",
            }
        },

            "3_j": {
                "question": "You go back to bed knowing full well that you might lose your job over this. Who cares. You're overqualified, and under payed. The End",
            },

            "3_k": {
                "question": "As you drive to work, you wrack your brains to try and come up with a good excuse. Have any of your relatives died recently? No. Any pets? No. You don't have any kids.... Before you know it, you're at work, face to face with your boss. You try to come up with an excuse on the fly, but all you manage to mutter is: 'Somebody died...' Whoops. The End",
            },

            "3_l": {
                "question": "Consider yourself lucky. Your bosses favorite donut shop is on your drive in to the office. You grab a dozen assorted donuts, and manage to slip into the office while your boss is distracted on the phone. Bingo. You put the donuts on the corner of your desk, and before you know it your boss has a donut in his hand and is talking to you about the football game last night. Major Win. The End",
            },

        "2_e": {
            "question": "As you sit there listening to some cool Lofi music, you contemplate your day, and plan out in your head what you want to do after work. Will you...",
            "answers": {
                "m": "Video games. It's always video games. It's the thing you love most in life, and why would you do anything other than that which you love most?",
                "n": "Maybe call an old friend? High school was a long time ago, and you always tell yourself that you're gonna reach out to some of those guys eventually",
                "o": "You really should finish reading Lord of the Rings. You've been working through the first book for over a year now, and you know that you'll feel a sense of accomplishment when you finally finish it.",
            }
        },

            "3_m": {
                "question": "The work day goes by at a snails pace, and the only thing that gets you through is knowing that you don't have to do anything when you get home except sit and play video games. Here you are again. Playing video games. About an hour in, you start to feel the same sense of emptiness and loneliness that you do whenever you sit in front of the colorful entertainment box. You knew this was coming. You spend the rest of the night sitting on the couch in the dark, pondering your life choices.",
            },

            "3_n": {
                "question": "After the work day is over, you scroll through your contacts list trying to figure out who to call. You come across the contact info for one of your friends that you haven't talked to in over a year. You hit the call button, and it goes straight to voicemail. You tried. You grab the controller next to you on the couch, and spend the rest of the night playing video games. The End",
            },

            "3_o": {
                "question": "At the end of the day, you lay in bed and begin reading the final chapter of Fellowship of the Ring. You read one page, and then fall asleep with the book in your hands. Not a bad end to the day. The End",

            },

        "2_f": {
            "question": "You hit the snooze button again. And again. And again... 10:00 AM. Crap. This happens way more often than you are willing to admit to yourself. This is gonna be a fun call to the boss. How do you tell him?",
            "answers": {
                "p": "You tell him you got hit by a car. It's a stretch, but your boss isn't the shapest knife in the drawer... ",
                "q": "You decide to stick with the classics. Your alarm didn't go off",
                "r": "Amnesia. That happens to people, right?"
            }
            
        },

            "3_p": {
                "question": "Holy. Crap. HE TOOK THE BAIT!!!?!?!? He really is just as stupid as you thought. Not only did he take the bait, but he also told you to take the rest of the day off, WITH PAY!!! That's a win in my book",
            },

            "3_q": {
                "question": "Pedictably, he didn't believe you. He's dumb, but he's not that dumb. But now he's dumb and pissed at you. You get to work as fast as you can, and spend the rest of the day kissing his but so that he doesn't fire you. The End",

            },

            "3_r": {
                "question": "He doesn't believe that you actually have amnesia, but you stick with it. You claim over and over again that you have no idea who he is or why he is calling you. You get deeper and deeper into this lie, to the point where you end up moving to a new city and changing your name. What happened? The End",

            },

    //contemplate life choices
    "1_c": {
        "question": "You lay in bed for a while contemplating your life choices. How did you get to this point? What happened to going to film school? Why did you let your mom convince you that you should become an engineer instead? Why is it that every time you bend your right arm, you feel a slight pain in the back of your neck? What do you do next?",
        "answers": {
            "g": "There's still time to make changes in your life. You can start taking film school classes at night",
            "h": "Wondering about what could have been is a waste of your time. You have a job to do, and if you don't do it, you won't be able to afford groceries",
            "i": "You call your mom and cuss her out for convincing you to persue engineering"
        }
    },

        "2_g": {
            "question": "You sign up for some night classes at a local college. What classes do you sign up for?",
            "answers": {
                "s": "Inspiring Fear Through Film",
                "t": "The ecenomics of independant filmmaking",
                "u": "Classic Films",
            }
        },

            "3_s": {
                "question": "This was the wrong choice for you. You already hate your life, and your job. Now when you get home from the job you hate you have to stare at terrifying images, and learn to make people uncomfortable. Maybe engineering isn't so bad after all. The End",

            },

            "3_t":{
                "question": "The ecenomics side of filmmaking turns out to be truly fascinating to you. As a trained engineer, you know how to think rationally, and think big picture. This feels right for you. You feel like this is your future, and it gives you motivation to keep on pressing forward. The End",
            },

            "3_u":{
                "question": "Classic Films. It truly is as boring as it sounds. Halfway through the semester, you've only learned one thing. You definitely don't want to be a film historian. The End",
            },

        "2_h":{
            "question": "You decide to head out early so that you can grab some breakfast before work. As you're sitting and eating, you try to find a way to convince yourself that you like your job. How do you do this?",
            "answers": {
                "v": "You remind yourself about " +selectedName+ " at the office. She's a real cutie, and you think you might still have a chance with her",
                "w": "You think of it from a financial point of view. If you don't work, you can't afford video games",
                "x": "You give up on trying to like your job and just accept that it's always going to suck"
            }
        },

            "3_v": {
                "question": selectedName+ " really is cute, and you know that if you just keep on showing up to work, and talking with her every chance you get, she just might agree to go out with you. Today is the day. You ask her out, and she says that she's been waiting for you to ask!! Maybe this job isn't so bad after all! The End",
            },

            "3_w":{
                "question": "You need the money. This really is true. Plus you can't stand the thought of having to move back in with your mom. *sigh* The job sucks, but you gotta get them dollars. Life sucks and then you die. The End",
            },

            "3_x":{
                "question": "You give up on trying to like the job, and with that you give up on trying to find happiness. You spend the rest of your working life with this crappy company, then you take your crappy retirement, and live on your own for the rest of your life. Congratulations. The End",
            },

        "2_i":{
            "question": "You angrily call your mom to confront her for bullying you into becoming an engineer. She picks up the phone. What do you say to her?",
            "answers": {
                "y": "Mom, after all of these years, I have to tell you how pissed I am that you convinced me not to follow my dreams of becoming a filmmaker, and instead becoming an engineer!",
                "z": "What kind of a mother convinces her child that they shouldn't persue their dreams???",
            }
        },

            "3_y":{
                "question": "After you finish confronting her, she answers you calmly in a way that only a mother could. She explains to you that she really was just trying to look out for you, and help you to do what is best. She tells you that if you still feel so passionate about going to film school that you should do it. She suggests that maybe you could just work part time while you take classes, and try to make your dream a reality. She really is a good mom. The End",
            },

            "3_z":{
                "question": "Your mom is not a fan of passive aggression. Not at all. After you confront her about crushing your dreams, she chews you out like you've never experienced in your life. Feeling washed up, smashed, and dejected, you put on your work clothes without showering, and head to the job that you hate, so that you can afford to live the mediocre life that you're sick of. The End.",
            },
};

//continue link
submit.addEventListener("click", function(){
    answer = form.querySelectorAll("input[type=radio]:checked")[0].value;
    if(answer){
        story++;
        populateForm(story + "_" + answer);
    }
});

//reset button
function resetForm(){
    document.getElementById("theAdventure").reset();
}


// generate story answer content
function populateForm(story){
    var current_story = story_telling[story];
    var text = "";
    for (var prop in current_story["answers"]){
        if(current_story["answers"].hasOwnProperty(prop)){
            text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';
        }
    }
    form.querySelector("p").innerHTML = current_story.question;
    form.querySelector("fieldset").innerHTML = text;
};

populateForm("start");
