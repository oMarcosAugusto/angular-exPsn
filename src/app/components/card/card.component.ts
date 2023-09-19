import { Component, Input, OnInit } from '@angular/core';
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

	constructor() {}

	ngOnInit(): void {
		const data = dataFake.find((teste) => {
			return teste.id === this.id;
		});
		this.gameLabel = data?.gameLabel || '';
		this.gameCover = data?.gameCover || '';
		this.gameType = data?.gameType || '';
		this.gamePrice = data?.gamePrice || '';
		console.log(this.id);
	}
}
