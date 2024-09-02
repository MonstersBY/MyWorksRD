import $ from "jquery";
import "jquery-ui/ui/widgets/selectmenu";
import { rem } from '../utils/constants';

function createCircleIcon(color) {
    return $('<span>', {
      'class': 'circle',
      style: 'background-color: ' + color
    });
  }
$.widget('custom.myselectmenu', $.ui.selectmenu, {
    _renderMenu: function( ul, items ) {
        var that = this;
        $.each( items, function( index, item ) {
          that._renderItemData( ul, item );
        });
        $(ul).wrapAll("<div class='ui-selectmenu-menu_wrapp'></div>")
    },
    _resizeMenu: function() {
        this.menu.outerWidth(this.button.outerWidth()-rem(5));
    }
});
$( ".form_input-select").find('select').myselectmenu();