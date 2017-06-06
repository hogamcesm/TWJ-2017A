export interface PlanetasStarWars{
  name: string,
  rotation_period: number,
  orbital_period: number,
  diameter: number,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents?:string[],
  films: string[],
  imagenURL?: string

};
