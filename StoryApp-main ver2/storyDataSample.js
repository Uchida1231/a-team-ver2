/* COPY 
        {
            layerId: ,
            sceneId: ,
            sceneTitle: "",
            chapters:[
                {
                    subtitle: "",
                    text: "",
                    imageUrl: ""
                },
            ],

            question:{
                title: "",
                text: "",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "",
                        text: "",
                        next:{
                            layerId: ,
                            sceneId: 
                        }
                    }
                ],
            }
        },

*/
function importStoryList(){

    const storyListDefine = [

/*== レイヤー 1 ==*/
        {
            layerId: 1,
            sceneId: 1,
            sceneTitle: "ある日の昼休み...",
            chapters:[
                {
                    chapterId: 0,
                    subtitle: "クラスのみんなでドッジボール",
                    text: "4年2組のクラスでは、ドッジボールが流行っています。今日もクラスのみんなで楽しくドッジボールをしていました。",
                    imageUrl: "1.png"
                },
                {
                    chapterId:1,
                    subtitle: "お昼休みは終わり",
                    text: "お昼休みはあっという間に終わり、チャイムが鳴ってしまいました。今日はクラスメイトのそうくんのせいで負けてしまいました。",
                    imageUrl: "2.png"
                }
            ],

            question:{
                title: "誰がボールを片付ける？",
                text: "このクラスではボールを片付ける人が決まっていません。だれがボールを片付けるべきですか？",
                imageUrl: "3.png",
                choices:[
                    {
                        choiceId: 0,
                        title: "最後にボールを持っていたたろうくん",
                        text: "いまボールを持ってるんだからそのまま片付けてほしいな",
                        next:{
                            layerId: 2,
                            sceneId: 1
                        }
                    },
                    {
                        choiceId: 1,
                        title: "ドッジボールをやろうと言った自分",
                        text: "自分で言い出したのだから、自分で片付けよう",
                        next:{
                            layerId: 2,
                            sceneId: 2
                        }
                    },
                    {
                        choiceId: 2,
                        title: "ミスをしたそうくん",
                        text: "そうくんのせいで負けたのだから、彼が片付けるべきだ",
                        next:{
                            layerId: 2,
                            sceneId: 3
                        }
                    },
                ],
            },
 
        },

/*== レイヤー 2 ==*/
        {
            layerId: 2,
            sceneId: 1,
            sceneTitle: "太郎くん",
            chapters:[
                {
                    subtitle: "",
                    text: "最後にボールを持っていたのは太郎くんでした。なんとなくみんなは最後にボールを持っていた人が片付けるのかなと思っていました。",
                    imageUrl: ""
                },
                {
                    subtitle: "",
                    text: "突然、太郎君は、近くにいたなおきくんにボールを投げました。なおきくんに当たれば、最後に持っていないことになるからです。しかし、ボールは外れてしまいました。",
                    imageUrl: ""
                },
                {
                    subtitle: "",
                    text: "ボールは校庭に転がっていきました。しかし、だれも取りに行きません。最後に触れた人が片付けなければいけないからです。",
                    imageUrl: ""
                },
            ],

            question:{
                title: "ボールを拾いに行く？",
                text: "予鈴が鳴っているけどボールを拾いに行かないと誰も片付けそうにありません。あなたはどうしますか？",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "ボールを拾いにいく",
                        text: "いまボールを持ってるんだからそのまま片付けてほしいな",
                        next:{
                            layerId: 3,
                            sceneId: 1
                        }
                    },
                    {
                        choiceId: 1,
                        title: "そのままにする",
                        text: "自分で言い出したのだから、自分で片付けよう",
                        next:{
                            layerId: 3,
                            sceneId: 2
                        }
                    },

                ],
            }
        },

        {
            layerId: 2,
            sceneId: 2,
            sceneTitle: "自分が片付ける",
            chapters:[
                {
                    subtitle: "遊ぼうと誘った自分が片付ける",
                    text: "クラスのみんなを誘ったのは自分なので自分が片付けようと思い、太郎君に「貸して」と声をかけました。",
                    imageUrl: ""
                },
                {
                    subtitle: "",
                    text: "しかし、太郎君は自分に向かって思いっきりボールを投げつけてきました。",
                    imageUrl: ""
                }
            ],

            question:{
                title: "太郎に対してどうする？",
                text: "思いっきりボールをぶつけてきた太郎くんにどうしますか？",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "ムカついたので太郎に投げ返す",
                        text: "",
                        next:{
                            layerId: 3,
                            sceneId: 3
                        }
                    },
                    {
                        choiceId: 1,
                        title: "授業が始まっているので、ボールを拾って教室に戻る",
                        text: "",
                        next: {
                            layerId: 3,
                            sceneId: 4
                        }
                    },

                ],
            }
        },
        {
            layerId: 2,
            sceneId: 3,
            sceneTitle: "ミスをしたそうくんに片付けさせる",
            chapters:[
                {
                    subtitle: "ミスをしたそうくん",
                    text: "今日の試合はそうくんのミスのせいで負けてしまいました。活躍していないんだから、ボールくらい片付けるべきです。",
                    imageUrl: ""
                },
                {
                    subtitle: "しょんぼり顔のそうくん",
                    text: "「おい、そう！お前のせいで負けたんだから片付けろ！」と言いました。するとそうくんはしょんぼりした顔でボールを取りにいきました。",
                    imageUrl: ""
                },
                {
                    subtitle: "何日も何日も...",
                    text: "それから数日間、なぜか毎回そうくんが片付けることになりました。その度にそうくんは少し悲しそうな顔をして、みんなのことを見ていましたが、なにも言いません。",
                    imageUrl: ""
                },
            ],
        
            question:{
                title: "本当にこれでいいの？",
                text: "ある日、そうくんがまたボールを片付けようとしていたところ、ゆうきくんがみんなに「なんでそうくんばっかりやってるの？みんなはやらなくていいの？」と聞きました。",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "言われてみれば、何日もそうくんがやってるなぁ...",
                        text: "",
                        next:{
                            layerId: 3,
                            sceneId: 5
                        }
                    },
                    {
                        choiceId: 1,
                        title: "下手なのが悪い！そうくんがやるべき！",
                        text: "",
                        next:{
                            layerId: 3,
                            sceneId: 6
                        }
                    },
                ],
            }
        },

/*== レイヤー 3 ==*/
        {
            layerId: 3,
            sceneId: 1,
            sceneTitle: "自分が拾いに行く",
            chapters:[
                {
                    subtitle: "しぶしぶ取りに行くことに...",
                    text: "ボールがなくなってしまうのは嫌なので、自分が取りに行くことにしました。",
                    imageUrl: ""
                },
                {
                    subtitle: "授業開始のチャイムが...",
                    text: "ボールを見つけ、少し遅れて下駄箱に行くと、授業開始のチャイムが聞こえてきました。急いで教室に戻りましたが、もう授業は始まっています。先生に怒られてしまいました。",
                    imageUrl: ""
                },
                
            ],

            question:{
                title: "放課後...",
                text: "放課後、昼休みのことを思い出してずっとむしゃくしゃしていました。",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "先生に事情を話して謝る",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 1
                        }
                    },
                    {
                        choiceId: 2,
                        title: "太郎を責める",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 2
                        }
                    },

                    
                ],
            }
        },
        
        {
            layerId: 3,
            sceneId: 2,
            sceneTitle: "太郎くんが取りにいけよ",
            chapters:[
                {
                    subtitle: "ボールを投げたのは太郎くん",
                    text: "ボールをなおきくんに当てようとした太郎くんが最後に片付けるべきだと思ったので、太郎くんに「行けよ！」と言いました。",
                    imageUrl: ""
                },

                {
                    subtitle: "しかし...",
                    text: "しかし、太郎くんはすでに上履きを履いて教室に向かっていました。授業に間に合わないと先生に怒られるので、自分もすぐに教室に戻りました。ボールは校庭に残ったままです。",
                    imageUrl: ""
                },
            ],

            question:{
                title: "ボールがなくなってしまった...",
                text: "誰もボールを持って帰ってこなかったのでどこかに消えてしまいました。あなたならどうする？",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "先生に報告する",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 3
                        }
                    },

                    {
                        choiceId: 1,
                        title: "先生に報告はしない",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 4
                        }
                    }
                ],
            }
        },

        {
            layerId: 3,
            sceneId: 3,
            sceneTitle: "ムカついて...",
            chapters:[
                {
                    subtitle: "いきなり投げられて...",
                    text: "いきなり投げられてムカついたので、太郎にボールを投げ返しました。",
                    imageUrl: ""
                },
                {
                    subtitle: "ボールはどこかへ...",
                    text: "太郎くんにあたったボールは跳ね返り、どこかに飛んでいってしまいました。授業が始まってしまうのでとりあえずそのままにして急いで教室に向かいました。",
                    imageUrl: ""
                },
            ],

            question:{
                title: "ボールがなくなってしまった...",
                text: "誰もボールを持って帰ってこなかったのでボールはどこかに消えてしまいました。あなたならどうする？",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "先生に報告する",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 3
                        }
                    },

                    {
                        choiceId: 1,
                        title: "先生に報告はしない",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 4
                        }
                    }
                ],
            }
        },

        {
            layerId: 3,
            sceneId: 4,
            sceneTitle: "ムカついたけど...",
            chapters:[
                {
                    subtitle: "授業がはじまる",
                    text: "太郎にはむかついたけど、授業がはじまるのでボールを拾って教室に戻りました。",
                    imageUrl: ""
                },
                {
                    subtitle: "翌日も...",
                    text: "翌日の昼休み、またも太郎くんがボールをぶつけてきました。もう我慢の限界です。",
                    imageUrl: ""
                },
            ],

            question:{
                title: "太郎にどうする？",
                text: "何度も思い切りぶつけてくる太郎くんにどうしますか？",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "やめてほしいと伝える",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 5 
                        }
                    },
                    {
                        choiceId: 1,
                        title: "自分も投げ返す",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 6 
                        }
                    },
                    {
                        choiceId: 2,
                        title: "我慢して先生に報告する",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 7
                        }
                    }
                ],
            }
        },

        {
            layerId: 3,
            sceneId: 5,
            sceneTitle: "ゆうきくんの問いかけ",
            chapters:[
                {
                    subtitle: "たしかにそうかも...",
                    text: "ゆうきくんの言う通り、たしかにそうくんばかりにやらせるのはかわいそうかもしれないと少し思いました。",
                    imageUrl: ""
                },
                {
                    subtitle: "いつもいつも...",
                    text: "そうくん以外の人もミスをしています。もちろん自分も。そうくんだけに押し付けていいのでしょうか。",
                    imageUrl: ""
                },
            ],

            question:{
                title: "では誰が片付ける？",
                text: "またある日の昼休み。今日は誰がボールを片付けますか？",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "自分がやるよ！",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 8
                        }
                    },
                    {
                        choiceId: 0,
                        title: "下手くそなそうくん",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 9
                        }
                    },
                ],
            }
        },

        {
            layerId: 3,
            sceneId: 6,
            sceneTitle: "下手なのは悪い？",
            chapters:[
                {
                    subtitle: "下手なのが悪い！...",
                    text: "自分は「そうくんのせいでドッジボールに負けたんだから、当然彼が悪いよね」と言いました。ゆうきくんは間違ったことを言っていると思います。",
                    imageUrl: ""
                },
                {
                    subtitle: "練習もしないで...",
                    text: "それに、そうくんはいつも吹奏楽部の練習にいっているので、ドッジボールの練習をしてくれません。下手なら連取すればいいのに。",
                    imageUrl: ""
                },
            ],

            question:{
                title: "では誰が片付ける？",
                text: "またある日の昼休み。今日は誰がボールを片付けますか？",
                imageUrl: "",
                choices:[
                    {
                        choiceId: 0,
                        title: "自分がやるよ！",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 8
                        }
                    },
                    {
                        choiceId: 0,
                        title: "下手くそなそうくん",
                        text: "",
                        next:{
                            layerId: 4,
                            sceneId: 9
                        }
                    },
                ],
            }
        },

/*== レイヤー 4 ==*/
        {
            layerId: 4,
            sceneId: 1,
            sceneTitle: "先生に謝る",
            chapters:[
                {
                    subtitle: "正直に話す",
                    text: "先生に事情を話して謝りました。先生には注意されましたが、正直に事情を話してくれてありがとうとも言われました。",
                    imageUrl: ""
                },
                {
                    subtitle: "クラス全体で...",
                    text: "後日、学級活動の時間でボールを片付ける人のルールを決める話し合いが行われました。",
                    imageUrl: ""
                },
            ],
            isEnd: true,
            story:{
                storyTitle: "クラスでルールを作る",
                storyMessage: "ここにたどり着いた皆さんは、最終的に先生に事情を話して謝ることを選んでいます。事情を話し、正直に言うことが大切です。",
                storyQuestion: "クラスではどんなルールを作ればよいでしょう？"
            }
        },

        {
            layerId: 4,
            sceneId: 2,
            sceneTitle: "太郎が悪い...",
            chapters:[
                {
                    subtitle: "太郎が持って帰るべきだった",
                    text: "なおきくんにボールをぶつけた太郎くんが持って帰るべきだったと思い、太郎のことを責めました。",
                    imageUrl: ""
                },
                {
                    subtitle: "太郎君も負けずに...",
                    text: "しかし、太郎くんは「君だって同じことをしたと思うよ」と言って、まったく謝ろうとしません。2人の関係は悪化してしまいました...",
                    imageUrl: ""
                },
            ],
            isEnd: true,
            story:{
                storyTitle: "太郎くんとけんか",
                storyMessage: "ここにたどり着いた皆さんは、自分だけ怒られたことに我慢できず、太郎を責めてしまいました。太郎君にはどのように伝えたらよかったでしょう。",
                storyQuestion: "太郎君にはどんなことを伝えればよかったでしょうか？"
            }
        },

        {
            layerId: 4,
            sceneId: 3,
            sceneTitle: "先生に報告したら...",
            chapters:[
                {
                    subtitle: "先生に報告したら...",
                    text: "先生に正直にボールがなくなったことを報告しました。先生から怒られ、はやく見つけてきなさいと言われます。",
                    imageUrl: ""
                },
                {
                    subtitle: "自分たちで探すことに",
                    text: "校庭のどこにもなかったので各クラスのボールを確認しにいきました。すると、3年生の子たちが拾ってくれていました。",
                    imageUrl: ""
                },
            ],
            isEnd: true,
            story:{
                storyTitle: "報告",
                storyMessage: "ここにたどり着いた皆さんは、ボールは放っておいてしまったものの、正直に先生に報告しましたね。事情を話すことは大切です。",
                storyQuestion: "そもそも、ボールをそのままにしてよかったのでしょうか？どうすればよかったか考えてみましょう。"
            }
        },

        {
            layerId: 4,
            sceneId: 4,
            sceneTitle: "報告しなかったら...",
            chapters:[
                {
                    subtitle: "校長先生が...",
                    text: "5時間目が終わったところで放送が入りました。どうやら校長先生が校庭に落ちていたボールを拾ってくれたようです。",
                    imageUrl: ""
                },
                {
                    subtitle: "先生には...",
                    text: "何も知らない担任の先生からもっと怒られてしまいました。ボールを持っていかなかっただけなのに...",
                    imageUrl: ""
                },
            ],
            isEnd: true,
            story:{
                storyTitle: "報告しない",
                storyMessage: "ここにたどり着いた皆さんは、先生に報告しなかったことで余計に怒られてしまいました。自分たちで起こしてしまったことを正直に話すことはとても大切です。",
                storyQuestion: "今回選んだ選択のうち、どこを変えればよかったか考えてみましょう。"
            }
        },

        {
            layerId: 4,
            sceneId: 5,
            sceneTitle: "言葉で伝える",
            chapters:[
                {
                    subtitle: "「やめてほしい」",
                    text: "太郎には「やめてほしい」と伝えました。手より前に口で解決しなければいけません。",
                    imageUrl: ""
                },
                {
                    subtitle: "太郎くんも...",
                    text: "太郎くんも本気ではなく「ごめんごめん」と謝ってくれました。大事にならなくてよかったですね。",
                    imageUrl: ""
                },
            ],
            isEnd: true,
            story:{
                storyTitle: "太郎と仲直り",
                storyMessage: "ここにたどり着いた皆さんは、太郎くんと仲直りできました。ただし、太郎くんが先に手を上げてしまっていることは問題です。まずは言葉で伝え合うことが大切です。",
                storyQuestion: "最後に太郎くんが謝らなかったらどうなっていたでしょう？"
            }
        },
        {
            layerId: 4,
            sceneId: 6,
            sceneTitle: "イライラして...",
            chapters:[
                {
                    subtitle: "昨日もやられたから",
                    text: "太郎くんには昨日もボールを当てられていたので、イライラして思い切り投げ返しました。",
                    imageUrl: ""
                },
                {
                    subtitle: "当たりどころが悪く...",
                    text: "投げたボールは太郎くんの目に当たってしまいました。周りの子たちが太郎くんを保健室に連れていきましたが、ボールを投げた自分は悪くないと思っています。",
                    imageUrl: ""
                },
            ],
            isEnd: true,
            story:{
                storyTitle: "保健室",
                storyMessage: "ここにたどり着いた皆さんは、太郎くんに怪我をさせてしまいました。目の怪我はとても危ないので、絶対にわざと顔に当ててはいけません。",
                storyQuestion: "どうしたら太郎くんに気持ちを伝えられただろう？"
            }
        },

        {
            layerId: 4,
            sceneId: 7,
            sceneTitle: "むかついたけど...",
            chapters:[
                {
                    subtitle: "とてもむかついていましたが、我慢して先生に報告しました。",
                    text: "太郎には「やめてほしい」と伝えました。手より前に口で解決しなければいけません。",
                    imageUrl: ""
                },
                {
                    subtitle: "4年生なら...",
                    text: "しかし、先生は太郎くんを怒るわけでもなく、「喧嘩するならボールは使わせない」と決めてしまいました。ドッジボールができなくなってしまいました。",
                    imageUrl: ""
                },
            ],
            isEnd: true,
            story:{
                storyTitle: "みんな使えなくなる",
                storyMessage: "ここにたどり着いた皆さんは、先生に告げ口したせいでクラスみんながボールを使えなくなってしまいました。報告することは大切ですが、この場合どうすればよかったでしょう。",
                storyQuestion: "先生に告げ口するまえに解決することはできなかったかな？"
            }
        },

        {
            layerId: 4,
            sceneId: 8,
            sceneTitle: "自分が片付けよう",
            chapters:[
                {
                    subtitle: "今日は僕がやるよ",
                    text: "そうくんばかりにやらせるのではなく、今日は自分が片付けることにしました。そうくんを見ると、すこし嬉しそうな顔をしていました。",
                    imageUrl: ""
                },
                {
                    subtitle: "それから...",
                    text: "あの日以来、そうくんとドッジボールの練習をしています。まずは投げるフォームから。どうやったら強く投げられるか、教えてあげることにしました。",
                    imageUrl: ""
                },
            ],
            isEnd: true,
            story:{
                storyTitle: "そうくんとお友達になる",
                storyMessage: "ここにたどり着いた皆さんは、最終的にそうくんと一緒にドッジボールの練習をすることになりました。人の能力の良し悪しでなにかを判断することは正しいことでしょうか。",
                storyQuestion: "そもそもそうくんが悲しい顔をしないためにはどうすればよかったでしょう？"
            }
        },
        {
            layerId: 4,
            sceneId: 9,
            sceneTitle: "やっぱり下手くそなのが悪い",
            chapters:[
                {
                    subtitle: "そうくんが悪い！",
                    text: "やはり何度考えてもドッジボールが下手くそなそうくんが片付けるべきだと思います。嫌だったらうまくなればいいのに、彼は練習しようともしない。少しはチームの役に立つべきです。",
                    imageUrl: ""
                },
                {
                    subtitle: "これはいじめ？",
                    text: "周りのクラスメイトもみんなそうくんが片付けることに何も言いませんでした。何日か経ったある日、そうくんはドッジボールに来ませんでした。教室に戻ると先生から呼ばれ、そうくんに何をしたのかきつく問い詰められました。",
                    imageUrl: ""
                },
            ],
            isEnd: true,
            story:{
                storyTitle: "いじめに発展",
                storyMessage: "ここにたどり着いた皆さんは、そうくんのことをいじめていると言っても過言ではありません。ドッジボールが下手だからといって、片付けなきゃいけないわけではないでしょう。ましてや、それがずっと続いているなんて明らかにいじめです。",
                storyQuestion: "すべての選択をもう一度見直してみよう"
            }
        },


    ];

    return storyListDefine;

}
