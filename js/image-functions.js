
function createImageTexture(imageName, imageDimX, imageDimY, index) {
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    var sampler = gl.createSampler();
    gl.bindSampler(index, sampler);

    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        1,
        1,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        new Uint8Array([0, 0, 255, 255])
    );

    //
    // load texture image using webgl2fundamentals boilerplate
    // initially creates just a 1x1 blue pixel as a placeholder
    // replaced by actual texture image once loaded
    //

    var image = new Image();
    image.src = imageName;

    image.addEventListener("load", function () {
        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            imageDimX,
            imageDimY,
            0,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            image
        );

        gl.generateMipmap(gl.TEXTURE_2D);
    });

    return texture;
}