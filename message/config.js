const fs = require('fs')


// APIKEY's
global.APIs = {
      	zeks: 'https://zeks.me',
      	anto: 'https://hardianto.xyz',
        amel : 'https://melcanz.com',
}


// Apikey Website Api
global.APIKeys = {
      	'https://zeks.me': 'apivinz',  //REGISTRASI FOR KEY
        'https://hardianto.xyz': 'hardianto',
        'https://melcanz.com' : 'BETA',  //REGISTRASI FOR KEY
}


// Nomor Owner
global.ownerNumber = ["94742134288@s.whatsapp.net"]
global.owner = ["94742134288"]


// Nama Bot
global.botName = 'Dash - Bot'


// EXIF
global.packname = 'BOTKINGDOM'
global.author = '❤️️'


// OTHERS
global.Prefix = 'Multi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sessionName = 'hisoka'
global.Mode = 'Public'
global.mess = {
    admin: 'ඇඩ්මින් ඔන්ලි 😒!',
    botAdmin: 'බොට් ඇඩ්මින් කෙනෙක් නෙමෙ🤤',
    owner: 'බොසාට විතරයි 😎',
    group: 'ගෲප් ඔන්ලි',
    private: 'Private Chat!',
    query: 'Query..',
    link: 'ලින්ක් එක 🙂l',
    wait: 'Loading...',
    done: 'ඕකෙ 🙃..',
    example1: 'Welcome @user Di Group @subject  @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject  @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)',
    rules : `Isi Sendiri!!`
}


// Path Img/Media
global.pathImg = fs.readFileSync('./media/Dash.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')
