using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Syncfusion.Blazor;

Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("Ngo9BigBOggjHTQxAR8/V1NAaF5cWWZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWX5fcnRdQmZeVkR1WkU=");

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AddSyncfusionBlazor();

await builder.Build().RunAsync();
