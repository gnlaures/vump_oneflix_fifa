function openWhatsApp(e){is.iphone()||is.androidPhone()||is.windowsPhone()||is.blackberry()||is.mobile()?window.open(wpp__parts.link_mobile+wpp__parts.phone+e,"_blank"):window.open(wpp__parts.link_web+wpp__parts.phone+e,"_blank")}var wpp__parts,propsNav,el,splideJogabilidade,widthSplideHero,propsTabH,propsSubMenu;function checkResponsiveMode(){var e;return"none"!==propsNav.hamburguer.css("display")?(e="is-responsive",propsNav.nav.removeClass("is-desktop"),propsNav.nav.addClass("is-responsive")):(e="is-desktop",propsNav.nav.removeClass("is-responsive"),propsNav.nav.addClass("is-desktop")),e}function closeAllSubMenus(){$(".c-subMenu").removeClass("is-active")}function closeResponsiveMenu(){propsNav.hamburguer.removeClass(propsNav.active),propsNav.contentHero.removeClass(propsNav.active)}function hideMaskMenu(){propsNav.mask.removeClass(propsNav.active)}function disableOverflow(){propsNav.body.addClass("u-overflowBlocked")}function enableOverflow(){propsNav.body.removeClass("u-overflowBlocked")}function removeGridClass(e){for(var s=1;s<=12;s++)e.removeClass("--col"+s);e.removeClass("--colNaN")}function removeMask(){propsSubMenu.mask.removeClass("is-active")}function mobileAdjusts(){is.mobile()?($(".c-subMenuHover").children("a").addClass("is-blocked-mobile"),$(".c-subMenuHover").addClass("is-mobile")):($(".c-subMenuHover").children("a").removeClass("is-blocked-mobile"),$(".c-subMenuHover").removeClass("is-mobile"))}$(window).on("load",function(){scrollDirection(),initGettersAndSetters(),changeTouchClickText()}),$(window).on("hashchange",function(){initGettersAndSetters()}),$(window).on("resize",function(){initGettersAndSetters()}),is.not.ie()?AOS.init():$("*").removeAattr("data-aos"),$(".m_whatsApp").length&&(wpp__parts={link_mobile:"http://api.whatsapp.com/",link_web:"https://web.whatsapp.com/",phone:"send?phone=",msg:"text="},$(".js-openWhatsModule").on("click",function(){openWhatsApp($(this).parent(".m_whatsApp").attr("data-whatsNumber"))})),$(".l-nav").length&&((propsNav={active:"is-active",scrollInit:0,scrollClassScrolled:30,scrollClassMiddle:600,body:$("body"),nav:$(".l-nav"),hamburguer:$(".l-nav .c-hamburguer"),contentHero:$(".l-nav__heroMenu"),mask:$(".l-nav__maskMenu"),maskAll:$(".l-nav__maskMenu.maskAll")}).hamburguer.on("click",function(){$(this).hasClass(propsNav.active)?(enableOverflow(),$(this).removeClass(propsNav.active),propsNav.maskAll.removeClass(propsNav.active),propsNav.contentHero.removeClass(propsNav.active)):(disableOverflow(),$(this).addClass(propsNav.active),propsNav.maskAll.addClass(propsNav.active),propsNav.contentHero.addClass(propsNav.active))}),propsNav.maskAll.on("click",function(){closeResponsiveMenu(),hideMaskMenu(),closeAllSubMenus(),enableOverflow()}),$(window).on("load",function(e){checkResponsiveMode(),1<$(this).scrollTop()?propsNav.nav.addClass("scrolled"):propsNav.nav.removeClass("scrolled")}),$(window).on("scroll",function(){var e=$(this).scrollTop();e>propsNav.scrollClassScrolled?propsNav.nav.addClass("scrolled"):propsNav.nav.removeClass("scrolled"),e>propsNav.scrollClassMiddle?propsNav.nav.addClass("scrolledMiddle"):(propsNav.nav.removeClass("hidden"),propsNav.nav.removeClass("scrolledMiddle")),e<propsNav.scrollInit?(propsNav.nav.removeClass("hidden"),propsNav.nav.addClass("scrolledUp"),propsNav.nav.removeClass("scrolledDown")):(propsNav.nav.removeClass("scrolledUp"),propsNav.nav.addClass("scrolledDown")),propsNav.nav.hasClass("hidden")&&(closeAllSubMenus(),hideMaskMenu()),propsNav.scrollInit=e})),$("#jogabilidade").length&&(el=$("#jogabilidade"),widthSplideHero=0,$(window).on("load resize",function(){$(".splide__control").addClass("u-dnone"),setTimeout(function(){widthSplideHero=$(".article__splideHero").width(),console.log(widthSplideHero),$(".splide__control").removeClass("u-dnone").width(widthSplideHero)},100)}),setTimeout(function(){splideJogabilidade=new Splide(".splide__jogabilidade",{width:widthSplideHero,fixedWidth:widthSplideHero,pagination:!0}).mount()},300)),$(".js-scrollLink").on("click",function(e){enableOverflow(),hideMaskMenu(),closeAllSubMenus(),closeResponsiveMenu(),e.preventDefault();e=$(this).attr("href");"#volta"===e?goToSection__scroll(e,80,80,700,10):goToSection__scroll(e,0,0,700,10)}),$(".liSelect").length&&($(".liSelect select").on("focusin",function(){$(this).closest(".liSelect").addClass("is-active")}),$(".liSelect select").on("focusout",function(){$(this).closest(".liSelect").removeClass("is-active")})),$(".liFile").length&&$(".inputAttach").on("change",function(){var e=$(this).val().split("fakepath");console.log(e),$(this).closest(".liFile").find(".inputText").val(e[1])}),$(".c-responsiveGrid").length&&$(window).on("load resize",function(){$(".c-responsiveGrid").each(function(e){var s={maxwBreaks:$(this).attr("data-maxw-breaks").split(", ").map(Number),maxwCols:$(this).attr("data-maxw-cols").split(", ").map(Number),initCols:parseInt($(this).attr("data-cols-init")),windowW:$(window).width()},o=s.maxwBreaks.length;if(s.maxwBreaks.length===s.maxwCols.length)for(var a=0;a<=o;a++)s.maxwBreaks[a]>=s.windowW&&(removeGridClass($(this)),$(this).addClass("--col"+s.maxwCols[a])),s.windowW>s.maxwBreaks[0]&&(removeGridClass($(this)),$(this).addClass("--col"+s.initCols));else console.log("Ta faltando media querie ou colunas, verifique seu componente")})}),$(".c-tabHorizontal").length&&(propsTabH={el:$(".c-tabHorizontal"),item:$(".c-tabHorizontal a"),header:$(".c-tabHorizontal__header"),content:$(".c-tabHorizontal__content")}).item.on("click",function(e){e.preventDefault(),$(this).closest(".c-tabHorizontal__header").find("a").removeClass("is-active"),$(this).addClass("is-active");var s=$(this).attr("href"),o=$(this);o.closest(propsTabH.el).find(propsTabH.content).removeClass("is-active"),setTimeout(function(){o.closest(propsTabH.el).find(propsTabH.content).addClass("u-dnone"),$(s).removeClass("u-dnone"),$(s).addClass("is-active")},350)}),$(".c-toggleList").length&&$(".c-toggleList__header").on("click",function(){$(this).parent().toggleClass("is-active")}),$(".c-subMenu").length&&((propsSubMenu={toggle:$(".c-subMenu__call"),content:$(".c-subMenu__content"),el:$(".c-subMenu"),primary:$(".js-subMenuPrimary"),mask:$(".c-subMenu__mask")}).mask.on("click",function(){propsSubMenu.el.removeClass("is-active"),removeMask()}),propsSubMenu.primary.parent().children(".c-subMenu__content").on("mouseleave",function(){propsSubMenu.el.removeClass("is-active"),removeMask()}),propsSubMenu.primary.on("click",function(e){e.preventDefault(),$(this).parent(".c-subMenu").hasClass("is-active")?$(this).parent(".c-subMenu").removeClass("is-active"):$(this).parents(".l-nav").length&&$(".l-nav").hasClass("is-responsive")?(console.log("l-nav"),$(this).parent(".c-subMenu").toggleClass("is-active")):(console.log("not nav"),$(".c-subMenu").removeClass("is-active"),$(this).parent(".c-subMenu").addClass("is-active"))}),propsSubMenu.toggle.on("click",function(e){e.preventDefault(),$(this).hasClass("js-subMenuPrimary")||$(this).parent(".c-subMenu").toggleClass("is-active")})),$(".c-subMenuHover").length&&($(window).on("load",function(){mobileAdjusts()}),$(window).on("resize",function(){mobileAdjusts()}));
//# sourceMappingURL=scripts-min.js.map
