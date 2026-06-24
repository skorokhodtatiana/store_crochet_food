import Image from "next/image";

export default function Home() {

	return (
		<>
			<main className="grid grid-cols-2 grid-rows-3 gap-4 justify-between">
				<div>
					<h2 className="font-bold text-4xl">
						Frontend
						<span className="text-yellow-600">&nbsp;Разработчик</span>
					</h2>
					<div className="mt-4">
						Меня зовут Татьяна и я Frontend разработчик с 3+ годами коммерческого опыта в продуктовой компании - маркетплэйсе.</div>
					</div>
				<div className="relative justify-self-end">
					<Image
						src="/main-photo.JPG"
						alt=""
						width={300} height={300}
						priority
						className="rounded-2xl"
					/>
					<span className="absolute -top-2 -right-2 text-focus rounded-full bg-accent text-xs font-bold px-2.5 py-1 border-2 border-gray-700">3 года опыта</span>
				</div>
				<div className="col-span-2">

				</div>
			</main>
		</>
	);
}
