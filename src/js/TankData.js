export const P1_TANK = {
  dir: 'up',
	status: 0, // 0 普通状态；1 一星状态； 2 二星状态； 3 三星状态
  x: 128,
  y: 384,
	speed: 2,
  t: [[0, -448], [-32, -480]],
  r: [[-896, -1344], [-928, -1376]],
  b: [[-1792, -2240], [-1825, -2273]],
  l: [[-2688, -3136], [-2720, -3168]]
}

export const B0_TANK = {
	dir: 'down',
	status: 0, // 0 普通状态；1 一星状态； 2 二星状态； 3 三星状态
	x: 128,
	y: 384,
	speed: 2,
	t: [[-192, -640], [-32, -480]],
	r: [[-1088, -1536], [-928, -1376]],
	b: [[-1984, -2432], [-1825, -2273]],
	l: [[-2880, -3328], [-2720, -3168]]
}

export const B1_TANK = {
	dir: 'down',
	status: 0, // 0 普通状态；1 一星状态； 2 二星状态； 3 三星状态
	speed: 1,
	t: [[-128, -576], [-160, -608]],
	r: [[-1024, -1472], [-1056, -1504]],
	b: [[-1920, -2368], [-1953, -2401]],
	l: [[-2816, -3264], [-2848, -3296]]
}

export const B2_TANK = {
	dir: 'down',
	status: 0, // 0 普通状态；1 一星状态； 2 二星状态； 3 三星状态
	speed: 1,
	bulletSpeed: 4,
	t: [[-256, -704], [-704, -1216]],
	r: [[-1152, -1600], [-2112, -3008]],
	b: [[-2048, -2496], [-3906, -4802]],
	l: [[-2944, -3392], [-5696, -6592]]
}

export const B3_TANK = {
	dir: 'down',
	status: 0, // 0 普通状态；1 一星状态； 2 二星状态； 3 三星状态
	speed: 2,
	t: [[-128, -576], [-160, -608]],
	r: [[-1024, -1472], [-1056, -1504]],
	b: [[-1920, -2368], [-1953, -2401]],
	l: [[-2816, -3264], [-2848, -3296]]
}