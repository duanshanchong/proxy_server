/**
 * Created by duanshanchong on 2018/4/25.
 */

const opt = {
    0: "A",
    1: "B",
    2: "C",
    3: "D"
};

const getResult = function(){
    console.log(str)
    const data = JSON.parse(str);
    const ret = data.result.examPaperQuestionsVos.map((e, i)=>{
        console.log(e)
        let ret = e.examQuestionVo.examQuestionOptionVos.map((e1,j) => {
            if (e1.correct){
                return opt[j];
            }
        })

        let num = i+1;

        return num + '——' + ret.join(',');

    })

    console.log(ret);
};

const filter = function(body) {
    let data = JSON.parse(body);
    data.result.examPaperQuestionsVos.forEach((e1)=>{
        e1.examQuestionVo.examQuestionOptionVos.forEach((e2) => {
            if (e2.correct){
                e2.content = '(✔️)' + e2.content;
            }
        })
    })

    return JSON.stringify(data);
};

module.exports.filter = filter;


// getResult(str.trim().replace(/\s/g, ''));