function showModal(p){let e=$(".modal-body"),t=$(".modal-title");t.empty(),e.empty();let a=$("<h1>"+p.name+"</h1>"),d=$('<img class="modal-img">');d.attr("src",p.imageUrl);let l=$("<p>Height: "+p.height+"</p>"),i=$("<p>Weight: "+p.weight+"</p>"),m=$("<p>Types: "+p.types+"</p>");t.append(a),e.append(d),e.append(l),e.append(i),e.append(m)}