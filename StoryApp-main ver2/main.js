const app = new Vue({

    el: "#app", //Vueを適用する範囲を定義（今回は <div id="app"></div>の中に適用）
    data: {     //使いたい変数や配列などを定義する    
        storyList: [],
        currentLayer: 1,
        currentStoryid: 0,
        currentLayerStoryList:[],
        currentStoryData: [],
        currentChapterId: 0,
        isChoiceButtonShow: false,
        isChapterEnd: false,
        isLastLayer: false,
        audioPlayer: ""
    },

    mounted() {
        //外部ファイルに保存しているストーリーデータを取得する
        this.storyList = importStoryList();
        
        //初回のデータを取得する
        this.currentLayerStoryList = this.getCurrentLayerStoryData(1);
        this.currentStoryData = this.currentLayerStoryList[0];

        //音の初期設定
        this.audioPlayer = new Audio();
    },

    methods: {

        getCurrentLayerStoryData(layerId){
            const targetDatas = this.storyList.filter((v) => v.layerId === layerId); 
            return targetDatas;
        },

        prevButtonClicked(){

            if(this.currentChapterId > 0){
                this.currentChapterId -= 1;
                this.isChoiceButtonShow = false;

                this.audioPlayer.pause();
                this.audioPlayer.currentTime = 0;
                
                if(this.currentStoryData.chapters[this.currentChapterId].soundUrl !== void 0){
                    this.audioPlayer.src = "sounds/" + this.currentStoryData.chapters[this.currentChapterId].soundUrl;
                    this.audioPlayer.play();
                }

            }
            
        },

        nextChapterButtonClicked(){

            this.audioPlayer.pause();
            this.audioPlayer.currentTime = 0;

            if(this.currentStoryData.chapters.length > this.currentChapterId + 1){
                this.currentChapterId += 1;
                this.isChoiceButtonShow = false;

                if(this.currentStoryData.chapters[this.currentChapterId].soundUrl !== void 0){
                    this.audioPlayer.src = "sounds/" + this.currentStoryData.chapters[this.currentChapterId].soundUrl;
                    this.audioPlayer.play();
                }

            }else{
                //最後のレイヤーだったらまとめにはいる
                if(this.isLastLayer){
                    //モーダル表示
                    console.log("last layer");
                    //結果を表示するモーダルを表示する
                    $('#matomeModal').modal({
                        keyboard: false,
                        backdrop: "static"
                    });
                }else{
                    this.isChoiceButtonShow = true;
                }
            }
        },

        choiceButtonClicked(nextLayerId, nextSceneId){

            //登録されているレイヤー数を超えていないかどうかチェック
            const maxLayerNum = this.storyList.reduce((a,b)=>a.layerId>b.layerId?a:b).layerId;
            

            if(maxLayerNum >= this.currentLayer){
                this.currentLayer += 1;
            }

            //次のデータを取得する
            const nextLayerStoryList = this.getCurrentLayerStoryData(this.currentLayer);

            console.log("MaxLayerId:" +maxLayerNum);
            console.log("NextLayerId:" +nextLayerId);
            console.log("NextSceneId:" +nextSceneId);

            //選択されたシーンを取得
            this.currentStoryData = nextLayerStoryList.find((v)=> v.sceneId == nextSceneId && v.layerId == nextLayerId);

            if(this.currentStoryData.isEnd){
                //ストーリーが終わり, 最後のlayerのときの処理
                this.isLastLayer = true;
            }else{
                this.isLastLayer = false;
            }

            this.isChoiceButtonShow = false;
            this.currentChapterId = 0;

        },
        reload(){
            location.reload();
        },

        getButtonColor(index){
            const bgId = index+1;         
            const classCode = "btn w-100 answer-btn-bg"+bgId;
            return classCode;
        }
    },

    



    watch:{
        currentChapterId:function(newVal, oldVal){

            if(this.currentStoryData.chapters.length == newVal+1){
                //その場面の最終チャプターである
                this.isChapterEnd = true;
            }else{
                this.isChapterEnd = false;
            }

        }
    }

})