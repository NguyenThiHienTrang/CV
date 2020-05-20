
$(document).ready(function () {

    var language;
    var locale = "en";

    $("#drop").change(function () {
        console.log("Change");
        locale = this.value;
        getLanguage();
    });

    var getLanguage = function () {
        $.ajax({
            url: 'Resources/locale/' + locale + '.json',
            dataType: 'json',
            success: function (lang) {
                setLanguage(lang);
            }
        });
    };

    var setLanguage = function (lang) {
        language = lang;
        display(language);
    };

    var display = function (language) {
        var big_heading = 'big-heading';
        var small_heading = 'small-heading';
        var address = 'address';
        var intro_quote = 'intro-quote';
        var intro_para = 'intro-para';
        var uni_heading = 'uni-heading';
        var uni_major = 'uni-major';
        var uni_period = 'uni-period';
        var school_heading = 'school-heading';
        var school_class = 'school-class';
        var school_period = 'school-period';
        var department_heading = 'department-heading';
        var department_class = 'department-class';
        var golden_achivement = 'golden-achivement';
        var bronze_achivement = 'bronze-achivement';
        var class_period = 'class-period';
        var language_heading = 'language-heading';
        var ielts = 'ielts';
        var exp_job_1_heading = 'exp-job-1-heading';
        var exp_job_1_location_label = 'exp-job-1-location-label';
        var exp_job_1_location = 'exp-job-1-location';
        var exp_job_1_project_label = 'exp-job-1-project-label';
        var exp_job_1_project_name = 'exp-job-1-project-name';
        var exp_job_1_workload_label = 'exp-job-1-workload-label';
        var exp_job_1_workload = 'exp-job-1-workload';
        var exp_job_1_period_label = 'exp-job-1-period-label';
        var exp_job_1_period = 'exp-job-1-period';
        var exp_job_1_usage_label = 'exp-job-1-usage-label';
        var exp_job_1_usage = 'exp-job-1-usage';
        var exp_job_1_learning_label = 'exp-job-1-learning-label';
        var exp_job_1_learning = 'exp-job-1-learning';
        //------------------------
        var exp_job_2_heading = 'exp-job-2-heading';
        var exp_job_2_location_label = 'exp-job-2-location-label';
        var exp_job_2_location = 'exp-job-2-location';
        var exp_job_2_project_label = 'exp-job-2-project-label';
        var exp_job_2_project_name = 'exp-job-2-project-name';
        var exp_job_2_workload_label = 'exp-job-2-workload-label';
        var exp_job_2_workload = 'exp-job-2-workload';
        var exp_job_2_position_label = 'exp-job-2-position-label';
        var exp_job_2_position = 'exp-job-2-position';
        var exp_job_2_period_label = 'exp-job-2-period-label';
        var exp_job_2_period = 'exp-job-2-period';
        var exp_job_2_usage_label = 'exp-job-2-usage-label';
        var exp_job_2_usage = 'exp-job-2-usage';
        var exp_job_2_learning_label = 'exp-job-2-learning-label';
        var exp_job_2_learning = 'exp-job-2-learning';
        //---------------------------
        var exp_job_3_heading = 'exp-job-3-heading';
        var exp_job_3_location_label = 'exp-job-3-location-label';
        var exp_job_3_location = 'exp-job-3-location';
        var exp_job_3_project_label = 'exp-job-3-project-label';
        var exp_job_3_project_name = 'exp-job-3-project-name';
        var exp_job_3_workload_label = 'exp-job-3-workload-label';
        var exp_job_3_workload = 'exp-job-3-workload';
        var exp_job_3_period_label = 'exp-job-3-period-label';
        var exp_job_3_period = 'exp-job-3-period';
        var exp_job_3_usage_label = 'exp-job-3-usage-label';
        var exp_job_3_usage = 'exp-job-3-usage';
        var exp_job_3_learning_label = 'exp-job-3-learning-label';
        var exp_job_3_learning = 'exp-job-3-learning';
        //----------------------------
        var read_heading = 'read-heading';
        var read_content = 'read-content';
        var sport_heading = 'sport-heading';
        var sport_content = 'sport-content';
        var program_heading = 'program-heading';
        var program_content = 'program-content';
        $('#' + big_heading).text(language[big_heading]);
        $('#' + small_heading).text(language[small_heading]);
        $('#' + address).text(language[address]);
        $('#' + intro_quote).text(language[intro_quote]);
        $('#' + intro_para).text(language[intro_para]);
        $('#' + uni_heading).text(language[uni_heading]);
        $('#' + uni_major).text(language[uni_major]);
        $('#' + uni_period).text(language[uni_period]);
        $('#' + school_heading).text(language[school_heading]);
        $('#' + school_class).text(language[school_class]);
        $('#' + school_period).text(language[school_period]);
        $('#' + department_heading).text(language[department_heading]);
        $('#' + department_class).text(language[department_class]);
        $('#' + golden_achivement).text(language[golden_achivement]);
        $('#' + bronze_achivement).text(language[bronze_achivement]);
        $('#' + class_period).text(language[class_period]);
        $('#' + language_heading).text(language[language_heading]);
        $('#' + ielts).text(language[ielts]);
        $('#' + exp_job_1_heading).text(language[exp_job_1_heading]);
        $('#' + exp_job_1_location_label).text(language[exp_job_1_location_label]);
        $('#' + exp_job_1_location).text(language[exp_job_1_location]);
        $('#' + exp_job_1_project_label).text(language[exp_job_1_project_label]);
        $('#' + exp_job_1_project_name).text(language[exp_job_1_project_name]);
        $('#' + exp_job_1_workload_label).text(language[exp_job_1_workload_label]);
        $('#' + exp_job_1_workload).text(language[exp_job_1_workload]);
        $('#' + exp_job_1_usage_label).text(language[exp_job_1_usage_label]);
        $('#' + exp_job_1_usage).text(language[exp_job_1_usage]);
        $('#' + exp_job_1_learning_label).text(language[exp_job_1_learning_label]);
        $('#' + exp_job_1_learning).text(language[exp_job_1_learning]);
        $('#' + exp_job_1_period_label).text(language[exp_job_1_period_label]);
        $('#' + exp_job_1_period).text(language[exp_job_1_period]);
        //---------------------------------------------------
        $('#' + exp_job_2_heading).text(language[exp_job_2_heading]);
        $('#' + exp_job_2_location_label).text(language[exp_job_2_location_label]);
        $('#' + exp_job_2_location).text(language[exp_job_2_location]);
        $('#' + exp_job_2_project_label).text(language[exp_job_2_project_label]);
        $('#' + exp_job_2_project_name).text(language[exp_job_2_project_name]);
        $('#' + exp_job_2_workload_label).text(language[exp_job_2_workload_label]);
        $('#' + exp_job_2_workload).text(language[exp_job_2_workload]);
        $('#' + exp_job_2_position_label).text(language[exp_job_2_position_label]);
        $('#' + exp_job_2_position).text(language[exp_job_2_position]);
        $('#' + exp_job_2_usage_label).text(language[exp_job_2_usage_label]);
        $('#' + exp_job_2_usage).text(language[exp_job_2_usage]);
        $('#' + exp_job_2_learning_label).text(language[exp_job_2_learning_label]);
        $('#' + exp_job_2_learning).text(language[exp_job_2_learning]);
        $('#' + exp_job_2_period_label).text(language[exp_job_2_period_label]);
        $('#' + exp_job_2_period).text(language[exp_job_2_period]);
        //----------------------------------------------------
        $('#' + exp_job_3_heading).text(language[exp_job_3_heading]);
        $('#' + exp_job_3_location_label).text(language[exp_job_3_location_label]);
        $('#' + exp_job_3_location).text(language[exp_job_3_location]);
        $('#' + exp_job_3_project_label).text(language[exp_job_3_project_label]);
        $('#' + exp_job_3_project_name).text(language[exp_job_3_project_name]);
        $('#' + exp_job_3_workload_label).text(language[exp_job_3_workload_label]);
        $('#' + exp_job_3_workload).text(language[exp_job_3_workload]);
        $('#' + exp_job_3_usage_label).text(language[exp_job_3_usage_label]);
        $('#' + exp_job_3_usage).text(language[exp_job_3_usage]);
        $('#' + exp_job_3_learning_label).text(language[exp_job_3_learning_label]);
        $('#' + exp_job_3_learning).text(language[exp_job_3_learning]);
        $('#' + exp_job_3_period_label).text(language[exp_job_3_period_label]);
        $('#' + exp_job_3_period).text(language[exp_job_3_period]);
        $('#' + read_heading).text(language[read_heading]);
        $('#' + read_content).text(language[read_content]);
        $('#' + sport_heading).text(language[sport_heading]);
        $('#' + sport_content).text(language[sport_content]);
        $('#' + program_heading).text(language[program_heading]);
        $('#' + program_content).text(language[program_content]);
    };
    getLanguage();

    var editted = 0;
    var portrait = $(".portrait");
    var contact = $(".ct-contact");
    var initTemplate = function () {
        var width = $(window).width();
        if (width >= 100 && width <= 1100) {
            editted = 1;
            console.log("Init edit: " + editted);
            $(".left-content").prepend(portrait);
            $(".main-heading").after(contact);
        }
    };

    initTemplate();

    $(window).resize(function () {
        width = $(window).width();
        console.log('width: ' + width);

        if (width >= 100 && width <= 1100 && editted !== 1) {
            editted = 1;
            console.log("edi add: " + editted);
            $(".left-content").prepend(portrait);
            $(".main-heading").after(contact);
        } else if (width > 1100 && editted === 1) {
            editted = 0;
            console.log("edi remove: " + editted);
            $(".right-content-wrapper").prepend(portrait);
            portrait.after(contact);
        }
    });

// Get the header
    var header = $(".header");

    // Get the offset position of the navbar
    var sticky = header.offset().top;

    $(".header").hover(function () {
        if (window.pageYOffset > sticky) {
            $(".header").css("opacity", "1");
        }
    }, function () {
        if (window.pageYOffset > sticky) {
            $(".header").css("opacity", "0.2");
        }
    });

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    var addSticky = function () {
        if (window.pageYOffset > sticky) {
            header.addClass("sticky");
            header.css("opacity", "0.2");
        } else {
            header.removeClass("sticky");
            header.css("opacity", "1");
        }
    };

    $(window).scroll(addSticky);
});


