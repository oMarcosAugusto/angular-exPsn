import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
	@Input()
	gameCover: string = '';
	@Input()
	gameLabel: string = '';
	@Input()
	gameType: string = '';
	@Input()
	gamePrice: string = '';
	@Input() id: string | undefined;
	@Input() cardLink: string = '';

	@Input() trailerLink: string = '';
	isHovered: boolean = false;

	constructor() {}

	async ngOnInit(): Promise<void> {
		const data = dataFake.find((teste) => {
			return teste.id === this.id;
		});
		this.gameLabel = data?.gameLabel || '';
		this.gameCover = data?.gameCover || '';
		this.gameType = data?.gameType || '';
		this.gamePrice = data?.gamePrice || '';
		this.cardLink = data?.cardLink || '';
		this.trailerLink = data?.trailerLink || '';
		console.log(this.trailerLink);
	}

	showVideo(): void {
		this.isHovered = true;
	}

	hideVideo(): void {
		this.isHovered = false;
	}

	onMouseEnter() {
		this.isHovered = true;
		this.setVideoVolume(0.03);
	}

	onMouseLeave() {
		this.isHovered = false;
		this.setVideoVolume(0);
	}

	private setVideoVolume(volume: number) {
		const videoElement: HTMLVideoElement | null = document.querySelector('.ca');
		if (videoElement) {
			videoElement.volume = volume;
		}
	}
}
