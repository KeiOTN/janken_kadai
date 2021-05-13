// clickで消える タイトル画面
$('.logo_title').click(function () {
    $('#scene020').hide();
    $('#scene040').show();
    $('#scene041').show().addClass("question1");
    $('#scene050').show().addClass("check_it").css({ 'z-index': '96' });
    $('.li_1').hide();
});


// scene040,041消す 森の中→かくにんする
$('#checkpoke').click(function () {
    $('#scene040,#scene041,#scene050').hide();
    $('#scene060').show();
});


// ポケモンを5種からひとつランダム選択

$('#checkpoke').on('click', function () {
    const selectPokemon1of5 = Math.floor(Math.random() * 6);
    if (selectPokemon1of5 == 0) {
        appear('ピカチュウ', 'pika.png');
    } else if (selectPokemon1of5 == 1) {
        appear('ゼニガメ', 'zenigame.png');
    } else if (selectPokemon1of5 == 2) {
        appear('ヒトカゲ', 'hitokage.png');
    } else if (selectPokemon1of5 == 3) {
        appear('ポッチャマ', 'pocha.jpg');
    } else if (selectPokemon1of5 == 4) {
        appear('フシギダネ', 'fushigi.jpg');
    } else if (selectPokemon1of5 == 5) {
        appear('イーブイ', 'evei.jpg');
    }
});



function appear(name, imgPath) {
    $('#pokeappear').text('野生の' + name + 'が現れた！');
    $('.poke_img').attr('src', '../img/' + imgPath);
}

// id=scene060消す ゲットor not
$('#fight').click(function () {
    $('#scene060').hide();
    $('#scene070').show();
    $('.ball_last').show();
    $('li').removeClass("li_hidden");
})




$('#non_fight').click(function () {
    // scene040,041,050に戻る 森の中
    $('#scene060').hide();
    $('#scene040,#scene041').show();
    $('#scene050').show().addClass("check_it").css({ 'z-index': '96' });

})

// ボールを選んでゲットする、勝率は全て1/3

var point = 100;
var monsterLast = 3;
var superLast = 2;
var hyperLast = 1;



$('#monster_ball').on('click', function () {

    if (monsterLast >= 1) {
        monsterLast -= 1;
        $('#monster_last').text(monsterLast);

    } else if (monsterLast < 1) {
        // alert('もうモンスターボールがないよ')
        // $('#monster_ball').hide();
        return;
    }

    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        $('#com_hand').text('おしい！');
        $('#result').text('にげられた！');
        point -= 20;

    } else if (randomNumber == 1) {
        $('#com_hand').text('やった！');
        $('#result').text('ゲット!!');
        point += 50;
        // changePoke();
        // alert('あたらしいポケモンが現れた！');
        sleep(4, function () {
            // if (!goNextStage()) {
            // if (changePoke()) {
            // console.log('ポケモン変更');
            // }
            // }
        });
    } else if (randomNumber == 2) {
        $('#com_hand').text('ざんねん！！！！');
        $('#result').text('にげられた！');
        point -= 20;
    }

    sleep(3, function () {
        $('#point').text(point);
    });


    result1();
    result2();


    // if (!goNextStage()) {
    // if (isGameOver() || isGameOver2()) {
    //ゲームオーバー
    // }
    // }
    sleep(4, function () {
        if (!goNextStage()) {
            if (isGameOver() || isGameOver2()) {
            }
        }
    });
});

$('#monster_ball').on('click', function () {
    if (monsterLast < 1) {
        $('#monster_ball').hide();
    }
});



$('#super_ball').on('click', function () {

    if (superLast >= 1) {
        superLast -= 1;
        $('#super_last').text(superLast);
    } else if (superLast < 1) {
        alert('もうスーパーボールがないよ')
    }


    const randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber == 0) {
        $('#com_hand').text('ざんねん！！！！');
        $('#result').text('にげられた！');
        point -= 20;

    }
    // else if (randomNumber == 1) {
    // $('#com_hand').text('おしい！');
    // $('#result').text('にげられた！');
    // point -= 20;
    // }

    else if (randomNumber == 1) {
        $('#com_hand').text('やった！');
        $('#result').text('ゲット!!');
        point += 50;
        // changePoke();
        // alert('あたらしいポケモンが現れた！');
        sleep(4, function () {
            changePoke();
        });
    }

    sleep(3, function () {
        $('#point').text(point);
    });


    result1();
    result2();

    sleep(4, function () {
        if (!goNextStage()) {
            if (isGameOver() || isGameOver2()) {
            }
        }
    });
});

$('#super_ball').on('click', function () {
    if (superLast < 1) {
        $('#super_ball').hide();
    }
});







$('#hyper_ball').on('click', function () {

    if (hyperLast >= 1) {
        hyperLast -= 1;
        $('#hyper_last').text(hyperLast);
    } else if (hyperLast < 1) {
        alert('もうハイパーボールがないよ')
        return;
    }


    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        $('#com_hand').text('やった！');
        $('#result').text('ゲット!!');
        point += 50;
        // changePoke();
        sleep(4, function () {
            changePoke();
        });
        // alert('あたらしいポケモンが現れた！');
    } else if (randomNumber == 1) {
        $('#com_hand').text('やった！');
        $('#result').text('ゲット!!');
        point += 50;
        // changePoke();
        sleep(4, function () {
            changePoke();
        });
    } else if (randomNumber == 2) {
        $('#com_hand').text('おしい！');
        $('#result').text('にげられた！');
        point -= 20;
    }

    sleep(3, function () {
        $('#point').text(point);
    });


    result1();
    result2();

    sleep(4, function () {
        if (!goNextStage()) {
            if (isGameOver() || isGameOver2()) {
            }
        }
    });
});

$('#hyper_ball').on('click', function () {
    if (hyperLast < 1) {
        $('#hyper_ball').hide();
    }
});






function changePoke() {
    const reSelectPokemon1of5 = Math.floor(Math.random() * 6);
    if (reSelectPokemon1of5 == 0) {
        reAppear('ピカチュウ', 'pika.png');
        return true;
    } else if (reSelectPokemon1of5 == 1) {
        reAppear('ゼニガメ', 'zenigame.png');
        return true;
    } else if (reSelectPokemon1of5 == 2) {
        reAppear('ヒトカゲ', 'hitokage.png');
        return true;
    } else if (reSelectPokemon1of5 == 3) {
        reAppear('ポッチャマ', 'pocha.jpg');
        return true;
    } else if (reSelectPokemon1of5 == 4) {
        reAppear('フシギダネ', 'fushigi.jpg');
        return true;
    } else if (reSelectPokemon1of5 == 5) {
        reAppear('イーブイ', 'evei.jpg');
        return true;
    }
    else {
        return false;
    }
}


function reAppear(name, imgPath) {
    //$('#pokeappear').text('こんどは' + name + 'が現れた！');
    $('.poke_img').attr('src', '../img/' + imgPath);
}




function result1() {
    $('#result_box1').css({ 'z-index': '100' });
    $('.ball_sil').css({ 'opacity': '1' });
    timerId = setTimeout(closeBox1, 3000); // タイマーを開始
}

var timerId1;
// ボックスを消して、タイマーを終了
function closeBox1() {
    $('#result_box1').css({ 'z-index': '20' }); // ボックスを消す
    clearTimeout(timerId1); // タイマーを終了
}


function result2() {
    $('#result_box2').css({ 'z-index': '99' });
    timerId2 = setTimeout(closeBox2, 4000); // タイマーを開始
}

var timerId2;
// ボックスを消して、タイマーを終了
function closeBox2() {
    $('#result_box2').css({ 'z-index': '20' }); // ボックスを消す
    clearTimeout(timerId2); // タイマーを終了
}




// レベルアップ
function goNextStage() {
    if (point >= 250) {
        // alert('レベルアップだ！');
        $('#scene070').hide();
        $('#poke_master').css({ 'z-index': '100' });
        $('.ball_last').hide();
        return true;
    } else {
        // alert('');
        return false;
    }
}

// 玉切れゲームオーバー
function isGameOver() {
    if ((monsterLast + superLast + hyperLast) <= 0) {
        $('#game_over').css({ 'z-index': '100' });
        $('.ball_last').hide();
        return true;

    } else {
        // alert('もういちど？');
        return false;
    }
}

// 持ち点ゲームオーバー
function isGameOver2() {
    if (point <= 0) {
        $('#game_over').css({ 'z-index': '100' });
        $('.ball_last').hide();
        return true;
    } else {
        // alert('もういちど？');
        return false;
    }
}



function sleep(waitSec, callbackFunc) {

    var spanedSec = 0;

    var waitFunc = function () {

        spanedSec++;

        if (spanedSec >= waitSec) {
            if (callbackFunc) callbackFunc();
            return;
        }

        clearTimeout(id);
        id = setTimeout(waitFunc, 1000);

    };

    var id = setTimeout(waitFunc, 1000);

}









// はじめから（数値リセット）
$('#restart').click(function () {
    window.location.reload();
});

// はじめから2（数値リセット）
$('#restart2').click(function () {
    window.location.reload();
});

