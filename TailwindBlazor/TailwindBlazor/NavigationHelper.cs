using Microsoft.AspNetCore.Components;

namespace TailwindBlazor
{
    public static class NavigationHelper
    {
        public static bool IsRouteActive(NavigationManager navigationManager, string targetRoute)
        {
            var currentUri = navigationManager.ToAbsoluteUri(navigationManager.Uri);
            var targetUri = navigationManager.ToAbsoluteUri(targetRoute);

            return currentUri.PathAndQuery == targetUri.PathAndQuery;
        }
    }
}