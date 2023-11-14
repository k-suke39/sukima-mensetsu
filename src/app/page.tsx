'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

export default function CardWithForm() {
	const questions = [
		{ q: '自己紹介をお願いします', time: 30 },
		{
			q: '前職で頑張ったことや成果等の実績はありますか？',
			time: 60,
		},
		{
			q: '前職で1番大変だったことや失敗した経験はありますか？',
			time: 60,
		},
		{
			q: '働く上で大切にしていたこと等ありますか？',
			time: 60,
		},
		{
			q: '1社目を選んだ理由を教えてください。',
			time: 45,
		},
		{
			q: 'エンジニアを目指したきっかけを教えてください。',
			time: 60,
		},
		{
			q: '志望理由を教えてください。',
			time: 60,
		},
		{
			q: '現在勉強中の言語や技術はありますか？',
			time: 45,
		},
		{
			q: '弊社のサービスの感想や改善点は何かありますか?',
			time: 45,
		},
		{
			q: 'キャリアプランを教えてください。',
			time: 60,
		},
		{
			q: '強みを教えてください。',
			time: 30,
		},
		{
			q: '自己PRをお願いします。',
			time: 30,
		},
		{
			q: '弱みを教えてください。',
			time: 30,
		},
		{
			q: '趣味を教えてください。',
			time: 30,
		},
		{
			q: '学習はどのように進めていますか？',
			time: 30,
		},
		{
			q: '就活はどのような軸で企業を探ししていますか？',
			time: 60,
		},
		{
			q: '退職理由を教えてください。',
			time: 60,
		},
		{
			q: '希望の年収額を教えてください。',
			time: 30,
		},
		{
			q: '学習中に意識していることを教えてください。',
			time: 30,
		},
		{
			q: 'チーム開発の経験はありますか？',
			time: 30,
		},
		{
			q: '何かご質問はありますか？（逆質問）',
			time: 60,
		},
		{
			q: '作成したWebアプリについて説明してください。',
			time: 45,
		},
		{ q: 'どのくらいの期間で実装しましたか？', time: 30 },
		{
			q: '使用技術について説明してください。',
			time: 60,
		},
		{
			q: 'インフラ構成について説明してください。',
			time: 45,
		},
		{
			q: 'テーブル構成の説明をしてください。',
			time: 45,
		},
		{
			q: 'Webアプリ作りで大変だった点はなんですか？',
			time: 60,
		},
		{
			q: '実装はどの様に進めましたか？',
			time: 45,
		},
		{
			q: '追加機能は考えていますか？',
			time: 45,
		},
		{
			q: 'アプリ/サービスを運用する際にどのようなことに気を付けていますか？',
			time: 45,
		},
	];
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress >= 100) {
					clearInterval(timer);
					setCurrentQuestionIndex(
						(prevIndex) => (prevIndex + 1) % questions.length
					);
					return 0;
				}
				return prevProgress + 100 / questions[currentQuestionIndex].time;
			});
		}, 1000);
		return () => clearInterval(timer);
	}, [currentQuestionIndex]);

	const handleNext = () => {
		setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
		setProgress(0);
	};

	const handleBack = () => {
		setCurrentQuestionIndex(
			(prevIndex) => (prevIndex - 1 + questions.length) % questions.length
		);
		setProgress(0);
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-300">
			<div>
				<Progress value={progress} className="mb-3" />
				<Card className="w-[350px]">
					<CardHeader>
						<CardTitle className="mb-3">
							{currentQuestionIndex + 1} 問目
						</CardTitle>
						<CardTitle>{questions[currentQuestionIndex].q}</CardTitle>
						<Separator />
						<CardDescription>
							{questions[currentQuestionIndex].time}
							秒で説明できる様にしましょう。
						</CardDescription>
					</CardHeader>
					<CardFooter className="flex justify-between">
						<Button variant="outline" onClick={handleBack}>
							戻る
						</Button>
						<Button onClick={handleNext}>次へ</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
