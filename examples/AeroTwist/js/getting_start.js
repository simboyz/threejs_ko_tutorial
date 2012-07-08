//gettting_start.js

var Basic = {};

Basic.do = function() {

    // setting to Camera and Scene
    var C = {
        width: 600,
        height: 300,
        viweAngle: 45,
        aspect: null,
        near: .1,
        far: 10000,
        container: $('#container')
    };

    C.aspect = C.width / C.height;

    var renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true
    });
    var camera = new THREE.PerspectiveCamera(
    C.viweAngle, C.aspect, C.near, C.far);

    var scene = new THREE.Scene();

    scene.add(camera);
    camera.position.z = 350;

    renderer.setSize(C.width, C.height);

    C.container.append(renderer.domElement);

    // setting to sphere mesh
    var S = {
        radius: 100,
        segments: 16,
        rings: 16
    };

    var sphereGeo = new THREE.SphereGeometry(S.radius, S.segments, S.rings);
    var sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0xDDDDDD,
        wireframe: true
    });

    var sphere = new THREE.Mesh(sphereGeo, sphereMaterial);

    scene.add(sphere);

    // lights
    var pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.x = 0;
    pointLight.position.y = 0;
    pointLight.position.z = 800;

    scene.add(pointLight);

    // render
    var animate = function() {
            sphere.rotation.y += 0.005;
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

    animate();
};

Basic.do();
