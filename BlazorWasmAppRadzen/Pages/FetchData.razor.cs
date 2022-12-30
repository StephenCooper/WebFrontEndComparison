using CSharpSharedData;
using Radzen;

namespace BlazorWasmAppRadzen.Pages
{
    public partial class FetchData
    {
        private WeatherForecast[]? forecasts;
        private HashSet<object> expanded = new ();

        protected override void OnInitialized()
        {
            forecasts = WeatherForecast.Data;
        }

        void OnGroupRowRender(GroupRowRenderEventArgs args)
        {
            if (!expanded.Contains(args.Group.Data.Key))
            {
                args.Expanded = false;
            }
        }

        void OnGroupRowExpand(Group args)
        {
            expanded.Add(args.Data.Key);
        }

        void OnGroupRowCollapse(Group args)
        {
            expanded.Remove(args.Data.Key);
        }
    }
}