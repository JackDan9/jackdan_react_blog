export default (tab) => {
    return new Map([
        ['ask', '问答'],
        ['share', '分享'],
        ['job', '招聘']
    ]).get(tab)
}