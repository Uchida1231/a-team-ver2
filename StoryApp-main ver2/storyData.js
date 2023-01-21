/* コピーして使う
// 通常のデータ構造
{
    layerId: 0,     //レイヤーのID
    sceneId: 0,     //シーンのID
    sceneTitle: "", //シーンのタイトル
    chapters:[      //チャプターの配列
        {
            chepterId:0,
            subtitle: "",   //チャプター1のタイトル
            text: "",       //チャプター1の説明テキスト
            imageUrl: ""    //チャプター1に表示する画像のファイル名
        },

        {
            cheoaterId:1,
            subtitele:""
            text:""
            imageUrl:""
        },
    ],

    question:{          //分岐する問いの配列
        title: "",      //問いのタイトル
        text: "",       //問いの説明テキスト
        imageUrl: "",   //問いの画像ファイル名
        choices:[       //選択肢
            {
                choiceId: 0,    //選択肢ID
                title: "",      //選択肢のタイトル
                text: "",       //選択肢の説明
                next:{          //次のシーン
                    layerId: ,  //選択したあとのレイヤーID
                    sceneId:    //選択したあとのシーンID
                }
            },
        ],
    }
},

//最後の問題のデータ構造

{
    layerId: 0,     //レイヤーID
    sceneId: 0,     //シーンID
    sceneTitle: "", //シーンタイトル
    chapters:[      //チャプターを保存する配列
        {
            subtitle: "",   //チャプター1のタイトル
            text: "",       //チャプター1のテキスト
            imageUrl: ""    //チャプター1に表示する画像のファイル名
        },
    ],
    isEnd: true,            //最後のレイヤーかどうか, 
    story:{                 //結末
        storyTitle: "",     //結末のタイトル（○○エンド）
        storyMessage: "",   //結末へのコメント
        storyQuestion: ""   //ワンポイントアドバイスやどうすればよかったかを問うためのテキスト
    },
},

*/

function importStoryList(){

    const storyListDefine = [

        //ここにデータ構造を追加していく

        {
            layerId:1,
            sceneId:1,
            sceneTitle:"",
            chapters:[
                {
                subtitle:"",
                text:"",
                imageUrl:""
                }
            ],
                           
            question:{
                title:"どっちを弁護する？",
                text:"",
                imageUrl:"",
                choices:[
                    {
                        choiceId:0,
                        title:"悪書 ツイト",
                        text:"",
                        next:{
                            layerId:2,
                            sceneId:1
                        }                        
                    },
                    {
                        choiceId:1,
                        title:"追 駆",
                        text:"",
                        next:{
                            layerId:2,
                            sceneId:2
                        },                        
                    },                    
               ],
            },
        },

        //0を選んだ場合

        {
            layerId:2,
            sceneId:1,
            sceneTitle:"",
            chapters:[
            {
                subtitle:"裁判官",
                text:"これから裁判を始めます。",
                imageUrl:""
            },
            {
                subtitle:"裁判官",
                text:"まず、検察官、主張をお願いします。",
                imageUrl:""
            },
            {
                subtitle:"検察官",
                text:"はい。",
                imageUrl:""
            },
            {
                subtitle:"検察官",
                text:"被害者は株式会社アップルズのキョウ子社長です。",
                imageUrl:""
            },
            {
                subtitle:"検察官",
                text:"私たちは、加害者である悪書 ツイトを侮辱罪で訴えます。",
                imageUrl:""
            },
            {
                subtitle:"裁判長",
                text:"弁護人は反対の主張をお願いします。",
                imageUrl:""
            },
            {
                subtitle:"エリ子",
                text:"私たちは、キョウ子社長の訴えに反対します",
                imageUrl:""
            },
            {
                subtitle:"エリ子",
                text:"なぜなら・・・",
                imageUrl:""
            },
            ],

            question:{
                title:"どっちを選ぶ？",
                text:"",
                imageUrl:"",
                choices:[
                    {
                        choiceId:0,
                        title:"個人情報をさらされて、プライバシーの侵害だ！",
                        text:"",
                        next:{
                            layerId:3,
                            sceneId:1
                        }                        
                    },
                    {
                        choiceId:1,
                        title:"社員のせいにする人に社長の資格はない！",
                        text:"",
                        next:{
                            layerId:3,
                            sceneId:2
                        },                        
                    },                    
               ],
            },
        },


        //1を選んだ場合

        {
            layerId:2,
            sceneId:2,
            sceneTitle:"",
            chapters:[
                {
                    subtitle:"裁判官",
                    text:"これから裁判を始めます。",
                    imageUrl:""
                },
                {
                    subtitle:"裁判官",
                    text:"まず、検察官、主張をお願いします。",
                    imageUrl:""
                },
                {
                    subtitle:"検察官",
                    text:"はい。",
                    imageUrl:""
                },
                {
                    subtitle:"検察官",
                    text:"被害者は株式会社アップルズのキョウ子社長です。",
                    imageUrl:""
                },
                {
                    subtitle:"検察官",
                    text:"私たちは、加害者である悪書 ツイトを侮辱罪で訴えます。",
                    imageUrl:""
                },
                {
                    subtitle:"裁判長",
                    text:"弁護人は反対の主張をお願いします。",
                    imageUrl:""
                },
                {
                    subtitle:"エリ子",
                    text:"私たちは、キョウ子社長の訴えに反対します",
                    imageUrl:""
                },
                {
                    subtitle:"エリ子",
                    text:"なぜなら・・・",
                    imageUrl:""
                },
                ],
    
                question:{
                    title:"どっちを選ぶ？",
                    text:"",
                    imageUrl:"",
                    choices:[
                        {
                            choiceId:0,
                            title:"不倫の記事は広く知らせた方がよい、正当な目的がある！",
                            text:"",
                            next:{
                                layerId:3,
                                sceneId:3
                            }                        
                        },
                        {
                            choiceId:1,
                            title:"会社はダメージを受けたが、社長自身はダメージを受けていない！",
                            text:"",
                            next:{
                                layerId:3,
                                sceneId:4
                            },                        
                        },  
                        {
                            choiceId:2,
                            title:"不倫したという情報は、取材して手に入れた情報だからだ！",
                            text:"",
                            next:{
                                layerId:3,
                                sceneId:5
                            },
                        },
                    ],      
                },
        },


        //0-0を選んだ場合

        {
            layerId:3,
            sceneId:1,
            sceneTitle:"",
            chapters:[
                {
                    subtitle:"エリ子",
                    text:"なぜなら、悪書さんは課金までしたのに、個人情報をさらされたんですよ！",
                    imageUrl:"",
                },
                {
                    subtitle:"エリ子",
                    text:"プライバシーの侵害じゃないですか！！",
                    imageUrl:"",
                },
                {
                    subtitle:"検察官",
                    text:"だからといって、キョウ子社長を誹謗中傷する理由にはならないですよね。",
                    imageUrl:"",
                },

            ],
        },


        //0-1を選んだ場合
        {
            layerId:3,
            sceneId:2,
            sceneTitle:"",
            chapters:[
                {
                    subtitle:"エリ子",
                    text:"記者会見で社員のせいにする人は、社長の視覚はない！",
                    imageUrl:""
                },
                {
                    subtitle:"エリ子",
                    text:"だから、批判されて当然だ！",
                    imageUrl:""
                },
                {
                    subtitle:"検察官",
                    text:"そのことにつきましては、キョウ子社長も深く反省をしています。",
                    imageUrl:""
                },
                {
                    subtitle:"検察官",
                    text:"しかし、その件と侮辱された件は全く関係がないことです。",
                    imageUrl:""
                },
            ],
            question:{
                title:"エリ子はどう反論する？",
                text:"",
                imageUrl:"",
                choices:[
                    {
                        choiceId:0,
                        title:"",
                        text:"それは侮辱ではなく意見だ！",
                        next:{
                            layerId:4,
                            sceneId:1
                        }
                    },
                    {
                        choiceId:1,
                        title:"",
                        text:"社長がいじめをしていたことは事実だ！",
                        next:{
                            layerId:4,
                            sceneId:2
                        }
                    },
                ],
            },
        },


        //1-0を選んだ場合
        {
            layerId:3,
            sceneId:3,
            sceneTiltle:"",
            chapters:[
                {
                    subtitle:"エリ子",
                    text:"不倫したという記事を出すことは、公益を図る目的があるからです。",
                    imageUrl:""
                },
                {
                    subtitle:"検察官",
                    text:"不倫をしたことが事実だとしても、ゲームの質が下がることはなく、ゲームを買ったお客様が不利益になることはありません。",
                    imageUrl:""
                },
                {
                    subtitle:"検察官",
                    text:"そのため、公益を図る目的があるとは言えないと考えます。",
                    imageUrl:""
                },
                {
                    subtitle:"",
                    text:"",
                    imageUrl:""
                },
            ],
        },


        //1-1を選んだ場合
        {
            layerId:3,
            sceneId:4,
            sceneTitle:"",
            chaoters:[
                {
                    subtitle:"エリ子",
                    text:"会社のイメージは下がったかもしれませんが、",
                    imageUrl:""
                },
                {
                    subtitle:"エリ子",
                    text:"社長本人の社会的地位は下がっていないのではないでしょうか？",
                    imageUrl:""
                },
                {
                    subtitle:"",
                    text:"確実に下がっています。",
                    imageUrl:""
                },
                {
                    subtitle:"",
                    text:"彼女は以前、天才若手美人社長といわれていましたが、",
                    imageUrl:""
                },
                {
                    subtitle:"",
                    text:"今は、詐欺師社長と言われ、熊手されるようになりました。",
                    imageUrl:""
                },
                {
                    subtitle:"",
                    text:"これは、社会的評価が下がってしまっていて、名誉棄損罪に当たると思います。",
                    imageUrl:""
                },
            ],
        },


        //1-2を選んだ場合

        {
            layerId:3,
            sceneId:5,
            sceneTitle:"",
            chapters:[
                {
                    subtitle:"エリ子",
                    text:"不倫したという情報は関係者に取材したときに得られた情報だからです。",
                    imageUrl:""
                },
                {
                    subtitle:"検察官",
                    text:"関係者と言っていますが、だれのことを言っているのでしょうか？",
                    imageUrl:""
                },
                {
                    subtitle:"エリ子",
                    text:"不倫した相手に直接話を聞きました。",
                    imageUrl:""
                },
                {
                    subtitle:"",
                    text:"",
                    imageUrl:""
                },
            ]
        }



        //0-1-0を選んだ場合

        {
            layerId:4,
            sceneId:1,
            sceneTitle:"",
            chapters:[
                {
                    subtitle:"エリ子",
                    text:"意義あり！！",
                    imageUrl:"",
                },
                {
                    subtitle:"エリ子",
                    text:"それは侮辱ではなく意見です。",
                    imageUrl:"",
                },
                {
                    subtitle:"検察官",
                    text:"こちらを見てください。",
                    imageUrl:"",
                },
                {
                    subtitle:"",
                    text:"",
                    imageUrl:"",
                },
                {
                    subtitle:"検察官",
                    text:"「きもい」などの言葉は具体的な内容ではないため、侮辱罪になります。",
                    imageUrl:"",
                },
                {
                    subtitle:"エリ子",
                    text:"くっ、、、",
                    imageUrl:"",
                },
                {
                    subtitle:"裁判長",
                    text:"弁護人、何か反論はありますか。",
                    imageUrl:"",
                },
                {
                    subtitle:"裁判長",
                    text:"では、判決に移ります。",
                    imageUrl:"",
                },
                {
                    subtitle:"エリ子",
                    text:"（守り切れなかった、、）",
                    imageUrl:"",
                },
                {
                    subtitle:"裁判長",
                    text:"被告人、悪書 ツイトを侮辱罪で有罪といたします。",
                    imageUrl:"",
                },

            ],
        },


         //0-1-1を選んだ場合

         {
            layerId:4,
            sceneId:2,
            sceneTitle:"",
            chapters:[
                {
                    subtitle:"エリ子",
                    text:"でも社長は実際いじめをしていたんですよね？",
                    imageUrl:"",
                },
                {
                    subtitle:"エリ子",
                    text:"このことはみんなが知るべき事実なのです。",
                    imageUrl:"",
                },
                {
                    subtitle:"検察官",
                    text:"いじめについての事実確認はとれていません。",
                    imageUrl:"",
                },
                {
                    subtitle:"検察官",
                    text:"また、こちらのツイートは事実かどうかにかかわらず人格を否定しているもので、これは侮辱罪にあたります。",
                    imageUrl:"",
                },
                {
                    subtitle:"検察官",
                    text:"このツイートの情報はどこから得たのですか。",
                    imageUrl:"",
                },
                {
                    subtitle:"エリ子",
                    text:"インターネットのまとめサイトからですが、、",
                    imageUrl:"",
                },
                {
                    subtitle:"検察官",
                    text:"事実に基づいていないですね。",
                    imageUrl:"",
                },
                {
                    subtitle:"エリ子",
                    text:"、、、",
                    imageUrl:"",
                },
                {
                    subtitle:"検察官",
                    text:"インターネットのまとめサイトから情報を得たということは、",
                    imageUrl:"",
                },
                {
                    subtitle:"検察官",
                    text:"悪書 ツイトのツイートは侮辱罪にあたると思います。",
                    imageUrl:"",
                },
                {
                    subtitle:"裁判長",
                    text:"弁護人、反論はありますか？",
                    imageUrl:"",
                },
                {
                    subtitle:"エリ子",
                    text:"ありません。",
                    imageUrl:"",
                },
                {
                    subtitle:"裁判長",
                    text:"では、判決に移ります。",
                    imageUrl:"",
                },
                {
                    subtitle:"裁判長",
                    text:"被告人、悪書 ツイトを侮辱罪で有罪といたします。",
                    imageUrl:"",
                },
            ],
        },

     
    

    ]

    return storyListDefine;

}
