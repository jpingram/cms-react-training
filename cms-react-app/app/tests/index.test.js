import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ComicCard } from "../comics/ComicCard";

var testComic = {
	"id": 100213,
	"title": "Hulk Vs. Thor: Banner Of War  (Trade Paperback)",
	"issueNumber": 0,
	"publishDate": "2022-10-19T00:00:00-0400",
	"creators": [
		{
			"resourceURI": "http://gateway.marvel.com/v1/public/creators/12712",
			"name": "Donny Cates",
			"role": "writer"
		},
		{
			"resourceURI": "http://gateway.marvel.com/v1/public/creators/14143",
			"name": "Nadia Shammas",
			"role": "writer"
		},
		{
			"resourceURI": "http://gateway.marvel.com/v1/public/creators/14285",
			"name": "Martin Coccolo",
			"role": "penciller"
		},
		{
			"resourceURI": "http://gateway.marvel.com/v1/public/creators/4989",
			"name": "Nic Klein",
			"role": "penciller"
		},
		{
			"resourceURI": "http://gateway.marvel.com/v1/public/creators/308",
			"name": "Gary Frank",
			"role": "penciller (cover)"
		},
		{
			"resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
			"name": "Jeff Youngquist",
			"role": "editor"
		}
	],
	"thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/634d57a98bda4.jpg"
}

describe("ComicCard", () => {
	it("renders a comic", () => {
		render(<ComicCard comic={testComic} />);
		// check if all components are rendered
		expect(screen.getByTestId("title")).toBeInTheDocument();
		expect(screen.getByTestId("issue")).toBeInTheDocument();
		expect(screen.getByTestId("publishDate")).toBeInTheDocument();
		expect(screen.getByTestId("creators")).toBeInTheDocument();
	});
});

