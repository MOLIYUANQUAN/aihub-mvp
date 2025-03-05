export const tutorialData = [
    {
        id: '1',
        title: '快速上手：如何使用AIHub',
        description: '从注册、选择AI到开启聊天，全流程教学。',
        steps: [
            '注册并登录AIHub',
            '点击左上角切换AI',
            '在对话框输入你的问题',
            '查看AI的实时回复',
            '进入教程和探索页面，发现更多玩法'
        ]
    },
    {
        id: '2',
        title: '如何用ChatGPT帮你写工作周报',
        description: 'AI帮你节省50%写作时间。',
        steps: [
            '切换到OpenAI',
            '输入本周工作关键词',
            '让ChatGPT帮你生成完整周报',
            '复制粘贴到邮件或文档'
        ]
    },
    {
        id: '3',
        title: 'Claude：长文总结神器',
        description: '几秒钟帮你总结长文、合同、政策文件。',
        steps: [
            '切换到Claude',
            '粘贴长文或上传文档',
            '让Claude帮你总结核心要点',
            '一键导出总结文本'
        ]
    },
    {
        id: '1',
        title: '如何用ChatGPT自动生成个人简历',
        description: '一分钟生成高质量简历，特别适合学生和职场新人。',
        steps: [
            '打开AIHub并切换到OpenAI',
            '输入个人基本信息（姓名、学历、技能等）',
            '让ChatGPT根据岗位需求生成专业简历',
            'AI生成后，可根据个性化需求手动调整',
            '下载并保存为PDF格式'
        ]
    },
    {
        id: '2',
        title: '用Claude生成法律合同模板',
        description: '法律合同不求人，AI快速生成标准模板。',
        steps: [
            '切换到Claude',
            '选择合同类型（租房合同、劳务合同等）',
            '输入双方信息和关键条款',
            'Claude自动生成完整法律合同',
            '可直接下载或打印'
        ]
    },
    {
        id: '3',
        title: 'DeepSeek快速生成产品文案',
        description: '适合电商卖家、微商快速生成爆款文案。',
        steps: [
            '切换到DeepSeek',
            '输入产品名称和卖点关键词',
            'DeepSeek生成多套文案方案',
            '一键复制并发布到朋友圈/商品页'
        ]
    },
    {
        id: '4',
        title: 'AI自动生成周报模板',
        description: '每周工作总结5分钟完成。',
        steps: [
            '切换到OpenAI',
            '输入本周工作内容和数据',
            'ChatGPT生成周报正文和总结',
            '格式化为Word或Markdown'
        ]
    }
];

export const exploreData = [
    {
        id: '101',
        title: 'AI生成表情包，月入5000',
        description: '普通人也能做的低门槛副业，教你用AI批量生成热门表情包并上架表情商店。',
        steps: [
            '使用DeepSeek生成有趣的文案',
            '用AI生成表情图片',
            '整理成系列表情包',
            '上传到微信/QQ表情商店',
            '坐等收入到账'
        ]
    },
    {
        id: '102',
        title: 'AI辅助剪辑，做短视频博主',
        description: '从脚本生成到字幕生成，AI全流程辅助，让你轻松做自媒体。',
        steps: [
            'ChatGPT生成短视频脚本',
            'AI生成配音和背景音乐',
            'AI自动加字幕和特效',
            '上传到抖音/YouTube'
        ]
    },
    {
        id: '103',
        title: 'AI批量写小红书爆文',
        description: '利用AI批量生成小红书标题、文案和配图。',
        steps: [
            '选择热门话题',
            '让ChatGPT生成爆款标题和文案',
            'AI生成配图（Stable Diffusion）',
            '批量发布到小红书',
            '打造矩阵账号，流量变现'
        ]
    },
    {
        id: '101',
        title: 'AI批量写小说，赚起点签约费',
        description: '用AI生成长篇小说大纲+章节内容，月入万元不是梦。',
        steps: [
            '用ChatGPT生成小说大纲',
            '分章节生成剧情和对话',
            '根据平台风格调整AI文风',
            '整理排版后上传到起点、番茄等平台',
            '签约后获得基础稿费+全勤+分成'
        ]
    },
    {
        id: '102',
        title: 'AI帮你做PPT接单副业',
        description: 'AI生成内容+设计PPT模板，轻松兼职。',
        steps: [
            '切换到Claude生成PPT内容大纲',
            '用ChatGPT补充细节和数据',
            'DeepSeek生成PPT图表和配图',
            '整合到Canva或WPS模板中',
            '在咸鱼/自由人等平台接单'
        ]
    },
    {
        id: '103',
        title: 'AI批量生成自媒体脚本',
        description: 'AI生成短视频剧本+配音+字幕，打造矩阵账号。',
        steps: [
            '选择抖音热门话题或关键词',
            '用OpenAI生成脚本和分镜',
            '用DeepSeek生成字幕文案',
            '配合AI配音工具生成配音',
            '剪映合成并上传到抖音、B站'
        ]
    },
    {
        id: '104',
        title: 'AI批量生成小红书种草文',
        description: 'AI+热点追踪+精准图文，打造爆款种草号。',
        steps: [
            '每日追踪小红书热点榜',
            '用ChatGPT生成产品推荐文案',
            'DeepSeek生成产品对比图',
            '批量发布并引导私域成交'
        ]
    }
];


import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { tutorialData } from '../data/sampleData';

export default function TutorialScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={tutorialData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('教程详情', { tutorial: item })}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.desc}>{item.description}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 10 },
    card: { backgroundColor: '#1e1e1e', padding: 15, marginBottom: 10, borderRadius: 8 },
    title: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    desc: { color: '#bbb', fontSize: 14, marginTop: 5 }
});



