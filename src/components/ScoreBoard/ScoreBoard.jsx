import React from 'react'
import { twMerge } from 'tailwind-merge'


const Fichita = ({className, classNameActive, isActive}) => (
	<div className={twMerge('flex justify-center items-center w-10 h-10 rounded-full',classNameActive)} >
	<div className={twMerge('transition-all duration-300 absolute rounded-full',className,isActive?"w-8 h-8":"w-10 h-10")} />
		
	</div>
)

/**
 * 
 * @typedef {{
 * name:string,
 * score?:number
 * }} PlayerInfo
 * @typedef {{
 * currentPlayer:number,
 * player1:PlayerInfo,
 * player2:PlayerInfo,
 * }} ScoreBoardProps
 * @returns 
 */
const ScoreBoard = (/**  @type {ScoreBoardProps}  */props) => {
	return (
		<div className='flex items-center w-full justify-between text-white text-2xl gap-6' >
			<div className='flex items-center gap-3' >
				{props.player1.name}
				<Fichita className="bg-french-rose-500"
					classNameActive="bg-french-rose-300"
					isActive={props.currentPlayer === 1}
				/>
			</div>
			<div className='flex items-center gap-3' >
				{props.player2.name}
				<Fichita className="bg-golden-tainoi-300"
					classNameActive="bg-golden-tainoi-100"
					isActive={props.currentPlayer === 2}
				/>
				</div>
		</div>
	)
}

export default ScoreBoard