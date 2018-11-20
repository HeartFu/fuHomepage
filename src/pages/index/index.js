// Custom Script
// 引入js文件
import $ from 'jquery';
import 'animate.css';
import "../../js/common.js";
import i18next from "i18next";
import "../../lib/jquery/js/jquery.nav.js";
import "../../lib/jquery/js/jquery.isotope.min.js";
import "../../lib/bootstrap/dist/css/bootstrap.min.css";
// cloud tag import 
import '../../lib/tagcloud/tagcloud.js';
// import "../../lib/bootstrap/css/bootstrap.min.css";
// Font Awesome
import "../../lib/font-awesome/css/font-awesome.min.css"; 
import "./styles.scss";
// Img
import zh from '../../assets/images/language/zh-CN.png';
import en from '../../assets/images/language/en-US.png';

var language = {
    addContent: function () {
        // add Text Content
        $('#language').text(i18next.t('language'));
        $('#home_name').text(i18next.t('homename'));
        $('#home_job').text(i18next.t('homejob'));
        $('#introduction1').text(i18next.t('introduction1'));
        $('#introduction2').text(i18next.t('introduction2'));
        $('#introductiondetail').text(i18next.t('introductiondetail'));
        $('#skillTitle').text(i18next.t('skilltitle'));
        $('#skillIntruduction').text(i18next.t('skillintruduction'));
        $('#skillIntruduction1').text(i18next.t('skillintruduction1'));
        $('#frontend').text(i18next.t('frontend'));
        $('#frontendYears').text(i18next.t('frontendyears'));
        $('#backend').text(i18next.t('backend'));
        $('#backendYears').text(i18next.t('backendyears'));
        $('#programSkill').text(i18next.t('programskill'));
        $('#skillDetail').text(i18next.t('skilldetail'));
        $('#skillDetail2').text(i18next.t('skilldetail2'));
        $('#skillDetail3').text(i18next.t('skilldetail3'));
        $('#skillDetail4').text(i18next.t('skilldetail4'));
        $('#skillDetail5').text(i18next.t('skilldetail5'));
        $('#skillDetail6').text(i18next.t('skilldetail6'));
        $('#skillDetail7').text(i18next.t('skilldetail7'));
        $('#skillDetail8').text(i18next.t('skilldetail8'));
        $('#experienceHead').text(i18next.t('experiencehead'));
        $('#experienceYears').text(i18next.t('experienceyears'));
        $('#experienceCompany1').text(i18next.t('experiencecompany1'));
        $('#experienceCompany1Years').text(i18next.t('experiencecompany1years'));
        $('#experience1Detail').text(i18next.t('experience1detail'));
        $('#experienceCompany').text(i18next.t('experiencecompany'));
        $('#experienceCompanyYears').text(i18next.t('experiencecompanyyears'));
        $('#experienceDetail').text(i18next.t('experiencedetail'));
        $('#projectHead').text(i18next.t('projecthead'));
        $('#projectNote').text(i18next.t('projectnote'));
        $('#allProject').text(i18next.t('allproject'));
        $('#huaweiProject').text(i18next.t('huaweiproject'));
        $('#fotunaProject').text(i18next.t('fotunaproject'));
        $('#otherProject').text(i18next.t('otherproject'));
        $('#fota').text(i18next.t('fota'));
        $('#fotaDetail').text(i18next.t('fotadetail'));
        $('#fotaDetail1').text(i18next.t('fotadetail1'));
        $('#fotaAddress').text(i18next.t('projectaddress'));
        $('#wallet').text(i18next.t('wallet'));
        $('#walletDetail').text(i18next.t('walletdetail'));
        $('#walletDetail1').text(i18next.t('walletdetail1'));
        $('#walletAddress').text(i18next.t('projectaddress'));
        $('#bbs').text(i18next.t('bbs'));
        $('#bbsDetail').text(i18next.t('bbsdetail'));
        $('#bbsDetail1').text(i18next.t('bbsdetail1'));
        $('#bbsAddress').text(i18next.t('projectaddress'));
        $('#website').text(i18next.t('website'));
        $('#websiteDetail').text(i18next.t('websitedetail'));
        $('#websiteDetail1').text(i18next.t('websitedetail1'));
        $('#websiteAddress').text(i18next.t('projectaddress'));
        $('#kpi').text(i18next.t('kpi'));
        $('#kpiDetail').text(i18next.t('kpidetail'));
        $('#kpiDetail1').text(i18next.t('kpidetail1'));
        $('#cce').text(i18next.t('cce'));
        $('#cceDetail').text(i18next.t('ccedetail'));
        $('#cceDetail1').text(i18next.t('ccedetail1'));
        $('#security').text(i18next.t('security'));
        $('#securityDetail').text(i18next.t('securitydetail'));
        $('#securityDetail1').text(i18next.t('securitydetail1'));
        $('#translate').text(i18next.t('translate'));
        $('#translateDetail').text(i18next.t('translatedetail'));
        $('#translateDetail1').text(i18next.t('translatedetail1'));
        $('#mano').text(i18next.t('mano'));
        $('#manoDetail').text(i18next.t('manodetail'));
        $('#manoDetail1').text(i18next.t('manodetail1'));
        $('#jquery').text(i18next.t('jquery'));
        $('#jqueryDetail').text(i18next.t('jquerydetail'));
        $('#jqueryDetail1').text(i18next.t('jquerydetail1'));
        $('#jqueryAddress').text(i18next.t('projectaddress'));
        $('#otherHeading').text(i18next.t('other'));
        $('#otherTitle').text(i18next.t('othertitle'));
        $('#education').text(i18next.t('education'));
        $('#xidian').text(i18next.t('xidian'));
        $('#xidianDetail').text(i18next.t('xidiandetail'));
        $('#xidianGrade').text(i18next.t('xidiangrade'));
        $('#rewards').text(i18next.t('rewards'));
        $('#reward1').text(i18next.t('reward1'));
        $('#reward2').text(i18next.t('reward2'));
        $('#reward3').text(i18next.t('reward3'));
        $('#reward4').text(i18next.t('reward4'));
        $('#reward5').text(i18next.t('reward5'));
        $('#reward6').text(i18next.t('reward6'));
        $('#reward7').text(i18next.t('reward7'));
        $('#reward1date').text(i18next.t('reward1date'));
        $('#reward2date').text(i18next.t('reward2date'));
        $('#reward3date').text(i18next.t('reward3date'));
        $('#reward4date').text(i18next.t('reward4date'));
        $('#reward5date').text(i18next.t('reward5date'));
        $('#reward6date').text(i18next.t('reward6date'));
        $('#reward7date').text(i18next.t('reward7date'));
        $('#homeNav').text(i18next.t('homenav'));
        $('#aboutusNav').text(i18next.t('aboutusnav'));
        $('#skillsNav').text(i18next.t('skillsnav'));
        $('#experienceNav').text(i18next.t('experiencenav'));
        $('#portfolioNav').text(i18next.t('portfolionav'));
        $('#otherNav').text(i18next.t('othernav'));
    },
    // 绑定修改语言的click事件
    bindChangeLang: function() {
        $('#language').bind('click', function() {
            if (localStorage.lng === 'en') {
                // change language to zh
                i18next.changeLanguage('zh');
                localStorage.lng = 'zh';
            } else {
                // change language to en
                i18next.changeLanguage('en');
                localStorage.lng = 'en';
            }
            language.changeLangImg();
            language.addContent();
        })
    },
    // change language img
    changeLangImg: function() {
        if (localStorage.lng === 'en') {
            // then change language img
            $('#lang_img').attr('src', zh)
        } else {
            // change language to en
            $('#lang_img').attr('src', en)
        }
    },
    init: function() {
        language.addContent();
        language.bindChangeLang();
        language.changeLangImg();
    }
}

// var tagCloudBlock = {
//     init: function() {
//         /*3D标签云*/
//         tagcloud({
//             selector: ".tagcloud",  //元素选择器
//             fontsize: 16,       //基本字体大小, 单位px
//             radius: 100,         //滚动半径, 单位px
//             mspeed: "normal",   //滚动最大速度, 取值: slow, normal(默认), fast
//             ispeed: "normal",   //滚动初速度, 取值: slow, normal(默认), fast
//             direction: 135,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
//             keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
//         });
//     }
// }
var snow = {
    init: function (options) {
        var $flake = $('<div id="snowbox" />').css({'position': 'fixed','z-index':'9999', 'top': '-50px'}).html('&#10052;');
        // var documentHeight = $(document).height();
        var documentHeight = $(window).height();
        // console.log(documentHeight)
        var documentWidth = $(document).width();
        var defaults = {
            minSize		: 10,
            maxSize		: 20,
            newOn		: 1000,
            flakeColor	: "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
        };
        var options	= $.extend({}, defaults, options);
        var interval= setInterval( function(){
        var startPositionLeft = Math.random() * documentWidth - 100,
        startOpacity = 0.5 + Math.random(),
        sizeFlake = options.minSize + Math.random() * options.maxSize,
        endPositionTop = documentHeight,
        endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
        durationFall = documentHeight * 10 + Math.random() * 5000;
        $flake.clone().appendTo('body').css({
            left: startPositionLeft,
            opacity: startOpacity,
            'font-size': sizeFlake,
            color: options.flakeColor
        }).animate({
            top: endPositionTop,
            left: endPositionLeft,
            opacity: 0.2
        },durationFall,'linear',function(){
            $(this).remove()
        });
        }, options.newOn);
    }
}

var customScripts = {
    profile: function () {
        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
            $('.navbar-inverse').on('click', 'li a', function () {
                $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
            });
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });
                return false;
            });
            $(window).smartresize(function () {
                $container.isotope({
                    // update columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });
        }
    },
    onePageNav: function () {
        if($('#main-nav ul li:first-child').hasClass('active')){
            $('#main-nav').css('background','none');
		}
        $('#mainNav').onePageNav({        
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting、
            },
            end: function () {
                //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');					
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            // scrollChange: function ($currentListItem) {
            //     //I get fired when you enter a section and I pass the list item of the section
			// 	// if(!$('#main-nav ul li:first-child').hasClass('active')){
			// 	// 	$('.header').addClass('addBg');
			// 	// }else{
			// 	// 	$('.header').removeClass('addBg');
            //     // }
            //     // If scroll is not top, background will add an css class
            //     // if ()
            //     if (window.scrollY > 0) {
            //         console.log(window.scrollY)
            //         $('.header').addClass('addBg');
            //     } else {
            //         $('.header').removeClass('addBg');
            //     }
            // }
        });
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.bannerHeight();
    }
}
$('document').ready(function () {
    customScripts.init();
    language.init();
    // tagCloudBlock.init();
    // bind scroll to add background on nav
    snow.init({ 
	    minSize: 5, /* 定义雪花最小尺寸 */
	    maxSize: 50,/* 定义雪花最大尺寸 */
	    newOn: 150  /* 定义密集程度，数字越小越密集 */
    });
    $(window).bind("scroll", function() {
        if (window.scrollY > 0) {
            $('.header').addClass('addBg');
        } else {
            $('.header').removeClass('addBg');
        }
    })
	// $('#diagram-id-1').diagram({ 
	// 		size: "190",
	// 		borderWidth: "10",
	// 		bgFill: "#95a5a6",
	// 		frFill: "#3498db",
	// 		textSize: 54,
	// 		textColor: '#1a1a1a'
	// 	}); 
	// 	$('#diagram-id-2').diagram({ 
	// 		size: "190",
	// 		borderWidth: "10",
	// 		bgFill: "#95a5a6",
	// 		frFill: "#3498db",
	// 		textSize: 54,
	// 		textColor: '#333'
	// 	});

	// 	$('#diagram-id-3').diagram({ 
	// 		size: "190",
	// 		borderWidth: "10",
	// 		bgFill: "#95a5a6",
	// 		frFill: "#3498db",
	// 		textSize: 54,
	// 		textColor: '#1a1a1a'
	// 	});
		// $(window).load(function() { 
		// 	  $('#filter .current').trigger('click');
		// });
});