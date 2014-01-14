function mdSwapImage(strImageID, strImageSource)
{
         document.getElementById(strImageID).src = strImageSource;
}

function preloadNav() {
     var i = 0;
     imagesURL = new Array();
     imagesArr = new Array();
     imagesURL[0]="/images/nav_Home_Active.jpg"
     imagesURL[1]="/images/nav_Treat_Active.jpg"
     imagesURL[2]="/images/nav_About_Active.jpg"
     imagesURL[3]="/images/nav_FAQ_Active.jpg"
     imagesURL[4]="/images/nav_Links_Active.jpg"
     imagesURL[5]="/images/nav_Contact_Active.jpg"
     imagesURL[6]="/images/nav_Home.jpg"
     imagesURL[7]="/images/nav_Treat.jpg"
     imagesURL[8]="/images/nav_About.jpg"
     imagesURL[9]="/images/nav_FAQ.jpg"
     imagesURL[10]="/images/nav_Links.jpg"
     imagesURL[11]="/images/nav_Contact.jpg"


     // start preloading
     for(i=0; i<=11; i++)
     {
          imagesArr[i]= new Image();
          imagesArr[i].src=imagesURL[i];

     }
}