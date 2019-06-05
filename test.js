//请求截图 
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

const width = device.width;
const height = device.height;

function loopMain() {
    let temp = images.read("task.JPG");
    let p = findImage(captureScreen(), temp, {
        region: [width * 0.75, height * 0.75], //搜索区域
        threshold: 0.5
    });
    if (p) {
        toast("找到啦:" + p);
        click(p.x, p.y);
        sleep(1000);
    } else {
        toast("没找到任务入口");
        exit();
    }

    temp = images.read("go.JPG");
    p = findImage(captureScreen(), temp, {
        region: [width * 0.75, height * 0.3], //搜索区域
        threshold: 0.6
    });
    if (p) {
        toast("找到啦:" + p);
        click(p.x, p.y);
        sleep(1000);
    } else {
        toast("没找到店铺入口");
        exit();
    }

    sleep(15000);

    temp = images.read("miao.JPG");
    p = findImage(captureScreen(), temp, {
        region: [width * 0.75, height * 0.5], //搜索区域
        threshold: 0.5
    });
    if (p) {
        toast("找到啦:" + p);
        click(p.x, p.y);
        sleep(1000);
    } else {
        toast("没找到猫币入口");
        exit();
    }

    temp = images.read("get.JPG");
    p = findImage(captureScreen(), temp, {
        region: [width * 0.4, height * 0.6], //搜索区域
        threshold: 0.5
    });
    if (p) {
        toast("找到啦:" + p);
        click(p.x, p.y);
        sleep(1000);
    } else {
        toast("没找到收下入口");
        exit();
    }
    back();
    sleep(1500);
}

for (let i = 0; i < 50; i++) {
    toast("第" + (i + 1) + "个店铺");
    loopMain();
}