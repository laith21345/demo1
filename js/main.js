var arr = [
	"“Be yourself; everyone else is already taken.”",
	"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
	"“So many books, so little time.”",
	"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
	"“A room without books is like a body without a soul.”",
	"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
	"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
	"“You only live once, but if you do it right, once is enough.”",
];

// var selector = document.getElementById("my-button");

// var i = Math.floor(Math.random() * arr.length);

// function getRandomQuote() {
    
//     var temp
//     do {
//         temp = Math.floor(Math.random() * arr.length);
// 	} while (temp == i);
    
//     i=temp
//     document.getElementById('my-cuote').innerHTML=arr[i]
// }

//==============================================
//another way



var selector = document.getElementById("my-button");


function getRandomQuote() {
    
    var i = Math.floor(Math.random() * arr.length);
    
    while (arr[i]==document.getElementById('my-cuote').innerHTML){
        i = Math.floor(Math.random() * arr.length);
    }

    document.getElementById('my-cuote').innerHTML=arr[i]
}

selector.onclick=getRandomQuote