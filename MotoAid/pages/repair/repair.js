(function () {
    "use strict";
    WinJS.UI.Pages.define("/pages/repair/repair.html", {
        ready: function (element, options) {
            var menu = element.querySelector("#menu-selector");
            var submenuContainer = element.querySelector("#submenu-container");
            var submenu = element.querySelector("#submenu-selector");
            var solution = document.getElementById("solution");
            menu.addEventListener("change", function (evt) {
                var value = evt.target.options.value;
                var oldChild = submenuContainer.firstElementChild;
                submenuContainer.removeChild(oldChild);
                var newChild = generateChild(value);
                submenuContainer.appendChild(newChild);
            }, false);
        }
    });
    function generateChild(value) {
        var parent = document.createElement("div");
        var br = document.createElement("br");
        var label = document.createElement("label");
        label.setAttribute("id", "submenu-selector-label");
        label.textContent = "Pilih masalah:";
        var select = document.createElement("select");
        select.setAttribute("id", "submenu-selector");
        select.setAttribute("size", 1);
        select.setAttribute("onchange", "output.value(event)");
        parent.appendChild(label);
        parent.appendChild(br);
        parent.appendChild(select);
        var optionValue = new Array();
        var optionText = new Array();
        var output;
        var solution = document.querySelector("#solution");
        switch (value) {
            case "knalpot":
                {
                    optionValue = ["berasap", "ledakan", "berair"];
                    optionText = ["Berasap", "Mengeluarkan suara ledakan", "Berair"];
                    output = "<ul><li><h3>Asap putih</h3><ul><li>Ada kemungkinan terjadi kerusakan pada ring piston atau oli seal mesin, sehingga oli mesin terbakar dan mengeluarkan asap berwarna putih. <strong>Solusi</strong>nya segera ganti ring piston dengan ukuran yang lebih besar (oversize) atau ganti seal klep dengan yang baru.</li></ul></li>";
                    output += "<li><h3>Asap hitam<h3><ul><li>Ada ketidakseimbangan campuran udara dan bahan bakar yang terbakar di ruang pembakaran. Asap hitam ini ditimbulkan oleh tidak seimbangnya campuran bensin dan udara. Dengan kata lain bensin lebih banyak yang terbakar dibanding udara. Dengan timbulnya asap hitam pada gas buang dapat dipastikan motor tersebut boros pemakaian bahan bakar. <strong>Solusi</strong>nya adalah lakukan penyetelan ulang pada karburator motor Anda.</li></ul></li></ul>";
                    break;
                }
            case "mesin":
                {
                    optionValue = ["berisik", "responsif", "overheat"];
                    optionText = ["Berisik", "Kurang responsif", "Overheat"];
                    output = "<ul><li><h3>Bagian depan</h3><ul><li>Celah klep longgar sehingga mesin berbunyi kasar. <strong>Solusi</strong>nya setel kembali celah klep sesuai standar. Untuk penyetelan disarankan untuk ditangani oleh tenaga profesional atau bawa motor Anda ke tempat servis resmi.</li><li>Rantai mesin longgar. <strong>Solusi</strong>nya ganti rantai mesin dengan yang baru. Ganti juga tensionernya bila perlu.</li><li>Klep sudah aus. <strong>Solusi</strong>nya ganti klep dengan yang baru.</li></ul></li>";
                    output += "<li><h3>Bagian kanan</h3><ul><li>Sepatu kopling ganda sudah aus. <strong>Solusi</strong>nya ganti sepatu kopling ganda dengan yang baru.</li><li>Mangkok kopling sudah aus. <strong>Solusi</strong>nya ganti mangkok kopling dengan yang baru.</li></ul></li>";
                    output += "<li><h3>Saat dingin</h3><ul><li>Tensioner keteng sudah aus. <strong>Solusi</strong>nya ganti tensioner keteng dengan yang baru.</li></ul></li></ul>";
                    break;
                }
            case "suspensi":
                {
                    optionValue = ["keras"];
                    optionText = ["Keras"];
                    output = "<ul><li>Volume oli shock kurang dari standar. <strong>Solusi</strong>nya tambahkan oli shock sesuai dengan standar motor Anda. </li><li>Seal shock rusak sehingga oli shock bocor. <strong>Solusi</strong>nya ganti seal shock dengan yang baru.</li></ul>";
                    break;
                }
            case "rem":
                {
                    optionValue = ["pakem"];
                    optionText = ["Kurang pakem"];
                    output = "<ul><li>Kanvas Rem sudah tipis. <strong>Solusi</strong>nya ganti kanvas rem dengan yang baru.</li><li>Minyak rem sudah berkurang. <strong>Solusi</strong>nya ganti minyak rem dan isi sesuai dengan volume standar yang sesuai dengan motor Anda.</li><li>House Master Brake sudah aus. <strong>Solusi</strong>nya ganti house master brake dengan yang baru.</li></ul>";
                    break;
                }
            case "transmisi":
                {
                    optionValue = ["gigi"];
                    optionText = ["Susah pindah gigi"];
                    output = "<ul><li>Komponen penekan kampas kopling telah aus. <strong>Solusi</strong>nya ganti penekan kampas kopling Anda dengan yang baru dan sesuai dengan motor Anda</li><li>Tangkai pengait posisi drum pemindah gigi telah aus. <strong>Solusi</strong>nya ganti tangkai pengait posisi drum pemindah gigit dengan yang baru.</li><li>Batang persneling bengkok, sehingga kampas kopling kurang renggang dan gearbox susah menggeser drum pemindah gigi. <strong>Solusi</strong>nya ganti batang persneling dengan yang baru.</li><li>Setelan speling pada tuas persneling tidak sempurna. <strong>Solusi</strong>nya setel kembali setelan speling sesuai dengan standar. Untuk penyetelan disarankan ditangani oleh tenaga profesional atau bawa motor Anda ke tempat servis resmi.</li></ul>";
                    break;
                }
        }
        for (var i = 0; i < optionValue.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", optionValue[i]);
            option.textContent = optionText[i];
            select.appendChild(option);
        }
        solution.innerHTML = output;
        return parent;
    }
    function generateOutput(event) {
        var output;
        var value = event.target.options.value;
        if (value == "berasap") {
            output = "<ul><li><h3>Asap putih</h3><ul><li>Ada kemungkinan terjadi kerusakan pada ring piston atau oli seal mesin, sehingga oli mesin terbakar dan mengeluarkan asap berwarna putih. <strong>Solusi</strong>nya segera ganti ring piston dengan ukuran yang lebih besar (oversize) atau ganti seal klep dengan yang baru.</li></ul></li>";
            output += "<li><h3>Asap hitam<h3><ul><li>Ada ketidakseimbangan campuran udara dan bahan bakar yang terbakar di ruang pembakaran. Dengan kata lain bensin lebih banyak yang terbakar dibanding udara. Dengan timbulnya asap hitam pada gas buang dapat dipastikan motor Anda boros pemakaian bahan bakar. <strong>Solusi</strong>nya adalah lakukan penyetelan ulang pada karburator motor Anda.</li></ul></li></ul>";
        } else if (value == "ledakan") {
            output = "<ul><li>Ada kerusakan pada bagian penyuplai udara bersih ke ruang bakar sehingga campuran udara dan bahan bakar tidak seimbang. <strong>Solusi</strong>nya setel air screw dengan memutarnya setengah putaran berlawanan arah jarum jam. Namun apabila air screw telah aus, segera ganti dengan yang baru.</li>";
            output += "<li>Komponen elektroda busi terlalu basah atau banyak karat sehingga menyebabkan percikan api tidak stabil. <strong>Solusi</strong>nya setel campuran bahan bakar dan ganti busi dengan yang baru. </li>";
            output += "<li>Packing knalpot rusak sehingga menyebabkan kebocoran pada gas buang. <strong>Solusi</strong>nya ganti packing knalpot motor Anda dengan yang baru dan sesuai dengan motor Anda.</li>";
            output += "<li>Mur pengikat knalpot ke mesin rusak sehingga menyebabkan kebocoran pada gas buang. <strong>Solusi</strong>nya ganti mur dengan yang baru.</li></ul>";
        } else if (value == "berair") {
            output = "<p>Knalpot atau mesin anda tidak mengalami kerusakan karena adanya tetesan air pada knalpot menandakan pembakaran berlangsung sempurna.</p>";
        } else if (value == "berisik") {
            output = "<ul><li><h3>Bagian depan</h3><ul><li>Celah klep longgar sehingga mesin berbunyi kasar. <strong>Solusi</strong>nya setel kembali celah klep sesuai standar. Untuk penyetelan disarankan untuk ditangani oleh tenaga profesional atau bawa motor Anda ke tempat servis resmi.</li><li>Rantai mesin longgar. <strong>Solusi</strong>nya ganti rantai mesin dengan yang baru. Ganti juga tensionernya bila perlu.</li><li>Klep sudah aus. <strong>Solusi</strong>nya ganti klep dengan yang baru.</li></ul></li>";
            output += "<li><h3>Bagian kanan</h3><ul><li>Sepatu kopling ganda sudah aus. <strong>Solusi</strong>nya ganti sepatu kopling ganda dengan yang baru.</li><li>Mangkok kopling sudah aus. <strong>Solusi</strong>nya ganti mangkok kopling dengan yang baru.</li></ul></li>";
            output += "<li><h3>Saat dingin</h3><ul><li>Tensioner keteng sudah aus. <strong>Solusi</strong>nya ganti tensioner keteng dengan yang baru.</li></ul></li></ul>";
        } else if (value == "responsif") {
            output = "<p>Kabel gas berkarat. <strong>Solusi</strong>nya ganti kabel gas dengan yang baru.</p>";
        } else if (value == "overheat") {
            output = "<ul><li>Busi aus atau busi tidak cocok. <strong>Solusi</strong>nya ganti busi dengan busi yang baru dan sesuai dengan motor Anda.</li><li>Penyetelan celah katup tidak sesuai</li><li>Piston atau ring piston aus</li></ul>";
        } else if (value == "keras") {
            output = "<ul><li>Volume oli shock kurang dari standar. <strong>Solusi</strong>nya tambahkan oli shock sesuai dengan standar motor Anda. </li><li>Seal shock rusak sehingga oli shock bocor. <strong>Solusi</strong>nya ganti seal shock dengan yang baru.</li></ul>";
        } else if (value == "pakem") {
            output = "<ul><li>Kanvas Rem sudah tipis. <strong>Solusi</strong>nya ganti kanvas rem dengan yang baru.</li><li>Minyak rem sudah berkurang. <strong>Solusi</strong>nya ganti minyak rem dan isi sesuai dengan volume standar yang sesuai dengan motor Anda.</li><li>House Master Brake sudah aus. <strong>Solusi</strong>nya ganti house master brake dengan yang baru.</li></ul>";
        } else if (value == "gigi") {
            output = "<ul><li>Komponen penekan kampas kopling telah aus. <strong>Solusi</strong>nya ganti penekan kampas kopling Anda dengan yang baru dan sesuai dengan motor Anda</li><li>Tangkai pengait posisi drum pemindah gigi telah aus. <strong>Solusi</strong>nya ganti tangkai pengait posisi drum pemindah gigit dengan yang baru.</li><li>Batang persneling bengkok, sehingga kampas kopling kurang renggang dan gearbox susah menggeser drum pemindah gigi. <strong>Solusi</strong>nya ganti batang persneling dengan yang baru.</li><li>Setelan speling pada tuas persneling tidak sempurna. <strong>Solusi</strong>nya setel kembali setelan speling sesuai dengan standar. Untuk penyetelan disarankan ditangani oleh tenaga profesional atau bawa motor Anda ke tempat servis resmi.</li></ul>";
        }
        var solution = document.querySelector("#solution");
        solution.innerHTML = output;
    }
    WinJS.Namespace.define("output", {
        value: generateOutput
    });
})();