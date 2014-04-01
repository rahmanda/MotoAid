(function () {
    "use strict";
    var storage = Windows.Storage;
    var dtm = Windows.ApplicationModel.DataTransfer.DataTransferManager;
    var item;
    var nav = WinJS.Navigation;
    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            item = options && options.item ? Data.resolveItemReference(options.item) : Data.items.getAt(option.index);
            element.querySelector(".titlearea .pagetitle").textContent = item.group.title;
            element.querySelector("article .item-title").textContent = item.title;
            element.querySelector("article .item-subtitle").textContent = item.transmission;
            element.querySelector("article .item-image").src = item.backgroundImage;
            element.querySelector("article .item-image").alt = item.shortTitle;
            var specs = element.querySelector("article .item-specs");
            for (var i = 0; i < item.specs.length; i++) {
                var spec = document.createElement("h2");
                spec.textContent = item.specs[i];
                spec.className = "spec";
                specs.appendChild(spec);
            }
            document.getElementById("set-button").addEventListener("click", function () { showMessage(options.item, options.index); }, false);
            document.getElementById("backtoprofile").addEventListener("click", function () { nav.navigate("/pages/startPage/startPage.html"); }, false);
            element.querySelector(".content").focus();
            dtm.getForCurrentView().addEventListener("datarequested", this.onDataRequested);
        },
        onDataRequested: function (e) {
            var request = e.request;
            request.data.properties.title = item.title;
            request.data.properties.description = "Spesifikasi Motor";

            var specs = "\r\nSPESIFIKASI\r\n" + item.specs.join("\r\n");
            request.data.setText(specs);

            var uri = item.backgroundImage;
            if (item.backgroundImage.indexOf("http://") != 0)
                uri = "ms-appx:///" + uri;

            uri = new Windows.Foundation.Uri(uri);
            var reference = storage.Streams.RandomAccessStreamReference.createFromUri(uri);
            request.data.properties.thumbnail = reference;
            request.data.setBitmap(reference);

        },

        unload: function () {
            WinJS.Navigation.removeEventListener("datarequested", this.onDataRequested);
        }

    });
    function showMessage(item, index) {
        var data = Data.resolveItemReference(item);
        var reference = index;
        var msg = new Windows.UI.Popups.MessageDialog("Set "+data.group.title+" "+data.title+" sebagai profil Anda?", "Set Profil");
        msg.commands.append(new Windows.UI.Popups.UICommand("Yes", function () {
            Data.store(reference);
            Data.storeKey(data.title);
            nav.navigate("/pages/startPage/startPage.html", { nodata: false, index: reference } );
        }, 1));
        msg.commands.append(new Windows.UI.Popups.UICommand("No", null, 2));
        msg.defaultCommandIndex = 2;
        msg.showAsync();
    }
})();
