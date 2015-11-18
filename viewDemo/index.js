define(
	["common/demoView", "bin/core/view", "bin/util/osUtil"],
	function(Base, View, osUtil)
	{
		var ElemView = View.extend(
		{
			genHTML:function()
			{
				View.prototype.genHTML.call(this);

				this.$html(null, "<div style='height:4rem;font-size:0.7rem;width:100%;background-color:gray'>View From Element</div>");
			}
		});

		var HtmlView = View.extend(
		{
		});

		var Class = {};

		Class.events = 
		{
			"click #elemCreate" : "elemCreate",
			"click #htmlCreate" : "htmlCreate",
		};

		Class.elemCreate = function()
		{
			this.$("#elemRoot").empty();
			this._elemView = new ElemView({elem:this.$("#elemRoot")});
		}

		Class.htmlCreate = function()
		{
			this.$("#htmlRoot").empty();
			this._htmlView = new HtmlView({html:"<div style='height:4rem;font-size:0.7rem;width:100%;background-color:gray'>View From HTML</div>"});
			this.$append("#htmlRoot", this._htmlView.$());
		}

		return Base.extend(Class);
	}
);
