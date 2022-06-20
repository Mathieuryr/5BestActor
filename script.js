$(document).ready(function() {
    var $mainMenuItems = $("#main-menu ul").children('li'),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,

    init = function(){
        bindEvents();
        if (validIndex(openedIndex)) {
            animateItem($mainMenuItems.eq(openedIndex), true, 250);
        }//toute première animation
    },

    bindEvents = function () {
         $mainMenuItems.children('.images').click(function () {
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
            
        });

        //pour transformer le pointeur sur les boutons
        $(".button").hover(function() {
            $(this).addClass('hovered');
        }, function() {
            $(this).removeClass('hovered');
        });

        $(".button").click(function() {
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);

        });
    },

    //vérifie la validité de l'index
    validIndex = function (indexToCheck) {
        return (indexToCheck>=0) && (indexToCheck<totalMainMenuItems);
    },

    //pour ouvrir ou fermer
    animateItem = function ($item, toOpen, speed) {
        var $colorImage = $item.find('.color'),
        itemParam = toOpen ?{width: "420px"}: {width: "140px"},
        /*on pose la question à toopen:
        si toOpen = true alors width=420px sinon 140px*/
        colorImageParam =toOpen ?{left: "0px"}: {left: "140px"};

        $colorImage.animate(colorImageParam, 250);
        $item.animate(itemParam, speed);
    },

    checkAndAnimateItem = function (indexToCheckAndAnimate) {    
        if(openedIndex === indexToCheckAndAnimate){
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
            openedIndex = -1; //-1 quand aucun n'est ouvert
        }
        else{
            if(validIndex(indexToCheckAndAnimate)){
                animateItem($mainMenuItems.eq(openedIndex), false, 250);
                openedIndex = indexToCheckAndAnimate; //met à jour l'index
                animateItem($mainMenuItems.eq(openedIndex), true, 250);
            }
        }

    };

    init();
});







