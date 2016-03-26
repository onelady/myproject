/*
 *说明：
 *参数：
 *作者：
 *邮箱：18840898153@126.cn
 */

;
(function ($) {
    $.fn.extend({
        comment: function (options) {
            var defaults = {
                "co": "#0ff",
                "evt": "click",
                "index": 0,
                "sethigh": "high"
            }

            var opts = $.extend({}, defaults, options),
                _this = this;


            //循环left
            _this.each(function (kk, vv) {
                //循环每一个left下的span星星
                _this.eq(kk).find("span").each(function (k, v) {
                    //添加点击事件
                    $(this).on(opts.evt, function () {
                        opts.index = k; //点击哪个让哪个的下标改变
                        $(this).addClass(opts.sethigh).prevAll().addClass(opts.sethigh);
                        $(this).nextAll('span').removeClass(opts.sethigh);

                        if (opts.index == 1) {
                            $(this).parent().find('.right').text("凑合");
                        } else if (opts.index == 2) {
                            $(this).parent().find('.right').text("还行");

                        } else if (opts.index == 3) {
                            $(this).parent().find('.right').html("好评");

                        } else if (opts.index == 4) {
                            $(this).parent().find('.right').html("优秀");
                            //$(this).parents('div').find(".right").html("推荐");
                        }
                    })


                })

            })




        }

    })

})(jQuery);