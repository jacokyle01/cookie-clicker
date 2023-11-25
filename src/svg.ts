import { VNode, h } from "snabbdom";

export const factory = () => {
	return h('svg.shop-svg', {
		attrs: {
			'width': '512',
			'height': '512',
			'viewBox': '0 0 512 512'
		}
	}, [
		h('path', {
			attrs: {
				'd': 'M 352.586 45.736 C 352.245 49.456, 349.031 96.805, 345.444 150.955 C 341.857 205.106, 338.827 249.488, 338.711 249.582 C 337.719 250.387, 327.186 256, 326.669 256 C 326.301 256, 326 241.150, 326 223 C 326 204.850, 325.828 190, 325.618 190 C 325.408 190, 298.076 204.680, 264.880 222.623 C 231.684 240.565, 203.956 255.463, 203.262 255.730 C 202.262 256.114, 202 249.331, 202 223.024 C 202 204.365, 201.615 189.979, 201.121 190.167 C 200.638 190.350, 169.138 207.316, 131.121 227.869 L 62 265.239 62 361.119 L 62 457 46 457 L 30 457 30 465 L 30 473 256 473 L 482 473 482 465 L 482 457 466 457 L 450 457 450 323.500 C 450 250.075, 449.762 190, 449.471 190 C 449.180 190, 444.383 192.478, 438.811 195.506 C 433.239 198.535, 428.570 200.897, 428.436 200.756 C 428.303 200.615, 425.787 164.275, 422.847 120 L 417.500 39.500 385.353 39.236 L 353.206 38.973 352.586 45.736 M 368.553 56.250 C 368.341 56.938, 367.917 61.888, 367.611 67.250 L 367.054 77 385.027 77 L 403 77 402.993 72.750 C 402.989 70.412, 402.699 65.463, 402.348 61.750 L 401.711 55 385.324 55 C 373.086 55, 368.840 55.317, 368.553 56.250 M 365.987 94.750 C 365.980 95.162, 363.755 127.888, 361.043 167.472 C 358.330 207.057, 356.216 239.550, 356.345 239.678 C 356.632 239.966, 410.186 211.091, 411.301 210.047 C 411.742 209.635, 410.392 183.356, 408.301 151.649 L 404.500 94 385.250 94 C 374.663 94, 365.994 94.338, 365.987 94.750 M 132.500 246.075 L 79.500 274.707 79.245 365.853 L 78.989 457 255.995 457 L 433 457 433 337.500 C 433 271.775, 432.807 218, 432.571 218 C 432.335 218, 405.147 232.625, 372.153 250.500 C 339.159 268.375, 311.683 283, 311.095 283 C 310.365 283, 309.944 272.638, 309.763 250.215 L 309.500 217.429 249 250.171 C 215.725 268.179, 187.944 282.933, 187.263 282.957 C 186.311 282.990, 185.966 275.474, 185.763 250.221 L 185.500 217.442 132.500 246.075 M 114.460 314.243 C 114.193 314.940, 114.092 331.483, 114.237 351.005 L 114.500 386.500 151.262 386.762 L 188.025 387.025 187.762 350.262 L 187.500 313.500 151.223 313.237 C 122.661 313.031, 114.843 313.245, 114.460 314.243 M 219.679 313.654 C 219.306 314.028, 219 330.683, 219 350.667 L 219 387 256.012 387 L 293.025 387 292.762 350.250 L 292.500 313.500 256.429 313.238 C 236.590 313.093, 220.052 313.281, 219.679 313.654 M 324.679 313.654 C 324.306 314.028, 324 330.689, 324 350.679 L 324 387.025 360.750 386.762 L 397.500 386.500 397.500 350 L 397.500 313.500 361.429 313.238 C 341.590 313.093, 325.052 313.281, 324.679 313.654 M 131 350.500 L 131 371 151.500 371 L 172 371 172 350.500 L 172 330 151.500 330 L 131 330 131 350.500 M 236 350.500 L 236 371 256 371 L 276 371 276 350.500 L 276 330 256 330 L 236 330 236 350.500 M 340 350.500 L 340 371 360.500 371 L 381 371 381 350.500 L 381 330 360.500 330 L 340 330 340 350.500',
				'stroke': 'none',
				'fill': '#BEBEBD',
				'fill-rule': 'evenodd'
			}
		})
		// h('path', {
		// 	attrs: {
		// 		'd': '',
		// 		'stroke': 'none',
		// 		'fill': '#080404',
		// 		'fill-rule': 'evenodd'
		// 	}
		// }),
	])
};

export const baker = () => {
	return h('svg.shop-svg', {
		attrs: {
			'width': '512',
			'height': '512',
			'viewBox': '0 0 512 512'
		}
	}, [
		h('path', {
			attrs: {
				'd': 'M 240.669 75.594 C 219.071 79.497, 197.894 94.001, 186.358 112.791 C 183.755 117.031, 181.488 120.685, 181.319 120.911 C 181.150 121.136, 180.222 120.613, 179.256 119.748 C 175.997 116.828, 163.051 110.932, 155.249 108.815 C 144.921 106.013, 124.503 105.748, 115.121 108.294 C 99.644 112.494, 89.015 118.308, 78.186 128.496 C 60.964 144.698, 52.364 163.088, 51.291 186 C 50.082 211.832, 59.257 234.769, 77.681 251.975 C 93.533 266.780, 114.380 275, 136.072 275 L 141 275 141 353.865 C 141 432.137, 141.016 432.750, 143.073 435.365 L 145.145 438 256.073 438 C 365.667 438, 367.024 437.976, 369 436 C 370.967 434.033, 371 432.667, 371 354 L 371 274 380.340 274 C 414.912 274, 447.511 248.980, 457.910 214.465 C 470.395 173.031, 448.122 127.533, 407.731 111.957 C 383.888 102.762, 359.761 104.613, 336.434 117.427 L 330.369 120.759 327.934 116.156 C 323.977 108.673, 315.343 98.558, 307.747 92.506 C 288.555 77.215, 264.819 71.231, 240.669 75.594 M 239.175 89.964 C 218.841 95.470, 200.836 110.980, 192.994 129.746 C 188.417 140.699, 184.938 141.412, 174.500 133.537 C 158.676 121.599, 134.571 117.117, 115.831 122.627 C 98.392 127.756, 81.113 142.100, 73.222 158 C 65.734 173.090, 63.586 187.214, 66.460 202.478 C 72.472 234.413, 98.013 257.577, 129.525 259.672 C 144.465 260.665, 160.207 256.531, 172.460 248.395 C 178.311 244.510, 181.831 244.493, 184.523 248.337 C 186.814 251.607, 186.302 254.916, 183.031 257.971 C 179.519 261.251, 166.282 268.276, 160.250 270.060 L 156 271.317 156 320.158 L 156 369 186.500 369 L 217 369 217 348.955 C 217 329.005, 217.012 328.897, 219.455 326.455 C 222.453 323.456, 224.905 323.351, 228.365 326.073 L 231 328.145 231 348.573 L 231 369 240 369 L 249 369 249 349.111 C 249 331.272, 249.190 328.987, 250.844 326.944 C 253.120 324.133, 258.136 323.908, 260.987 326.488 C 262.879 328.200, 263 329.536, 263 348.655 L 263 369 272 369 L 281 369 281.015 348.750 C 281.024 337.613, 281.361 328.005, 281.765 327.400 C 282.768 325.898, 286.516 324, 288.480 324 C 289.366 324, 291.195 325.105, 292.545 326.455 C 294.988 328.897, 295 329.005, 295 348.955 L 295 369 325.500 369 L 356 369 356 320.158 L 356 271.317 351.750 270.067 C 345.411 268.203, 330.043 259.870, 327.886 257.128 C 325.500 254.094, 325.485 250.858, 327.844 247.944 C 330.569 244.579, 334.565 245.068, 342.259 249.709 C 345.945 251.932, 352.907 255.045, 357.731 256.626 C 365.375 259.131, 367.976 259.495, 378 259.464 C 397.917 259.402, 412.600 253.372, 426.334 239.613 C 452.717 213.183, 453.470 169.627, 428.011 142.630 C 415.896 129.785, 402.656 122.962, 385.682 120.818 C 377.616 119.799, 374.770 119.855, 367.308 121.178 C 355.917 123.197, 345.159 127.735, 337 133.965 C 327.040 141.569, 323.687 140.778, 319.024 129.726 C 311.480 111.845, 297.192 98.573, 277.817 91.452 C 267.648 87.714, 249.995 87.035, 239.175 89.964 M 156 403.500 L 156 424 256.500 424 L 357 424 357 403.500 L 357 383 256.500 383 L 156 383 156 403.500',
				'stroke': 'none',
				'fill': '#BEBEBD',
				'fill-rule': 'evenodd'
			}
		})
	])
}

export const cursor = (): VNode => {
	return h('svg.shop-svg', {
		attrs: {
			'viewBox': '0 0 300 300',
			'shape-rendering': 'geometricPrecision',
			'text-rendering': 'geometricPrecision'
		}
	}, [
		h('polygon', {
			attrs: {
				'points': '11.764463,-164.99981 29.591219,-123.486827 72.503353,-23.557767 -0.13167,-50.118388 -72.503353,-23.557767 11.764463,-164.99981',
				'transform': 'matrix(.646568-.762857 0.795425 0.674171 185.340641 166.547837)',
				'fill': '#d2dbed',
				'stroke-width': '0'
			}
		}),
		h('rect', {
			attrs: {
				'width': '35.294128',
				'height': '102.469095',
				'rx': '0',
				'ry': '0',
				'transform': 'matrix(.745377-.853731 0.735141 0.641838 128.80991 140.206975)',
				'fill': '#d2dbed',
				'stroke-width': '0'
			}
		})
	])
}

export const cookie = (): VNode => {
	return h('svg#cookie-svg', {
		attrs: {
			'viewBox': '0 0 416.991 416.991',
			'shape-rendering': 'geometricPrecision',
			'text-rendering': 'geometricPrecision'
		}
	}, [
		h('g', [
			h('g', [
				h('path', {
					attrs: {
						'd': 'M344.649,204.32c-7.807,3.62-16.314,5.501-25.067,5.503-10.392.001-20.665-2.759-29.711-7.982-16.886-9.749-27.772-27.175-29.52-46.218-19.143-1.749-36.518-12.726-46.216-29.523-9.747-16.882-10.465-37.41-2.462-54.773-12.251-8.607-20.792-21.491-23.926-36.143-41.698,1.338-79.982,16.399-110.502,40.79c7.997,7.752,12.731,18.522,12.731,30.139c0,14.868-7.772,27.946-19.461,35.412-6.518,4.163-14.248,6.588-22.539,6.588-5.841,0-11.538-1.211-16.78-3.498-.026.027-.052.053-.078.08-1.962,5.439-3.673,10.997-5.136,16.655C22.086,176.423,20,192.219,20,208.496c0,103.937,84.559,188.496,188.495,188.496c41.112,0,79.18-13.243,110.192-35.67.654-.587,1.493-1.204,2.467-1.842c11.615-8.688,22.217-18.658,31.549-29.74-10.812-7.738-17.66-20.402-17.66-34.193c0-9.15,2.95-17.619,7.937-24.526c7.339-10.164,19.105-16.916,32.449-17.425.523-.029,1.057-.049,1.615-.049.404,0,.807.014,1.21.026c1.405-8.275,2.272-16.73,2.548-25.333-14.655-3.131-27.542-11.67-36.153-23.92ZM132.435,334.871c-13.093,0-24.803-6.025-32.512-15.445-6.215-7.325-9.976-16.795-9.976-27.131c0-23.159,18.841-42,42-42c13.093,0,24.804,6.025,32.512,15.445c6.215,7.325,9.976,16.795,9.976,27.131c0,23.159-18.84,42-42,42Zm27.759-151.183c-13.093,0-24.803-6.025-32.512-15.445-6.215-7.325-9.976-16.795-9.976-27.131c0-23.159,18.841-42,42-42c13.093,0,24.803,6.025,32.512,15.445c6.215,7.325,9.976,16.795,9.976,27.131c0,23.158-18.84,42-42,42Zm86.769,131.147c-16.814,0-31.855-7.727-41.767-19.815-7.929-9.401-12.721-21.53-12.721-34.762c0-29.776,24.225-54,54-54c16.814,0,31.855,7.727,41.767,19.815c7.929,9.401,12.721,21.53,12.721,34.762c0,29.776-24.225,54-54,54Z',
						'fill': '#c19f64'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M159.706,163.111c12.131,0,22-9.869,22-22s-9.869-22-22-22-22,9.869-22,22s9.87,22,22,22Z',
						'fill': '#58290a'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M131.948,314.295c12.131,0,22-9.869,22-22s-9.869-22-22-22-22,9.869-22,22s9.869,22,22,22Z',
						'fill': '#58290a'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M69.977,106.111c0-6.503-2.838-12.494-7.563-16.596-9.154,11.218-17.041,23.505-23.448,36.643c2.809,1.265,5.866,1.954,9.011,1.954c12.131-.001,22-9.87,22-22.001Z',
						'fill': '#58290a'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M355.043,295.546c0,7.423,3.79,14.218,9.724,18.234c8.124-12.02,14.935-26.111147,20.142-39.877147-2.419091-1.392177-6.726928-1.673495-9.48-1.411853-12.210491-.016098-20.701843,10.860831-20.386,23.055Z',
						'transform': 'translate(-.04 1.088147)',
						'fill': '#58290a'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M246.475,294.259c18.748,0,34-15.253,34-34c0-18.748-15.252-34-34-34s-34,15.252-34,34c0,18.747,15.252,34,34,34Z',
						'fill': '#58290a'
					}
				})
			]),
			h('g', [
				h('path', {
					attrs: {
						'd': 'M192.218,114.556c5.926,7.242,9.488,16.489,9.488,26.555c0,23.159-18.841,42-42,42-12.822,0-24.314-5.782-32.024-14.869c7.708,9.42,19.419,15.445,32.512,15.445c23.159,0,42-18.841,42-42c0-10.336-3.76-19.806-9.976-27.131Z',
						'fill': '#89634a'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M173.948,292.295c0,23.159-18.841,42-42,42-12.822,0-24.314-5.782-32.024-14.869c7.709,9.42,19.419,15.445,32.512,15.445c23.159,0,42-18.841,42-42c0-10.337-3.761-19.806-9.976-27.131c5.925,7.242,9.488,16.489,9.488,26.555Z',
						'fill': '#89634a'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M300.475,260.259c0,29.776-24.225,54-54,54-16.543,0-31.365-7.485-41.279-19.238c9.911,12.087,24.952,19.815,41.767,19.815c29.775,0,54-24.224,54-54c0-13.232-4.792-25.361-12.721-34.762c7.64,9.317,12.233,21.223,12.233,34.185Z',
						'fill': '#89634a'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M159.706,183.111c23.159,0,42-18.841,42-42c0-10.066-3.562-19.313-9.488-26.555-7.708-9.42-19.418-15.445-32.512-15.445-23.159,0-42,18.841-42,42c0,10.337,3.761,19.806,9.976,27.131c7.711,9.087,19.202,14.869,32.024,14.869Zm0-64c12.131,0,22,9.869,22,22s-9.869,22-22,22-22-9.869-22-22s9.87-22,22-22Z'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M131.948,334.295c23.159,0,42-18.841,42-42c0-10.066-3.562-19.313-9.488-26.555-7.708-9.42-19.419-15.445-32.512-15.445-23.159,0-42,18.841-42,42c0,10.337,3.761,19.806,9.976,27.131c7.71,9.087,19.201,14.869,32.024,14.869Zm0-64c12.131,0,22,9.869,22,22s-9.869,22-22,22-22-9.869-22-22s9.869-22,22-22Z'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M416.97,206.596l-.013-.831c-.064-5.279-4.222-9.598-9.494-9.864-14.875-.751-28.007-9.639-34.27-23.193-1.245-2.694-3.623-4.696-6.489-5.465-2.867-.769-5.927-.224-8.353,1.487-6.706,4.73-14.927,7.335-23.146,7.336-6.964,0-13.857-1.854-19.935-5.363-13.458-7.77-21.242-22.803-19.83-38.299.269-2.956-.789-5.879-2.888-7.977-2.1-2.1-5.033-3.154-7.977-2.889-1.195.109-2.411.164-3.614.164-14.272,0-27.562-7.662-34.683-19.996-7.77-13.458-6.994-30.369,1.976-43.084c1.711-2.425,2.257-5.485,1.488-8.352-.768-2.867-2.77-5.245-5.464-6.49-13.548-6.262-22.434-19.387-23.189-34.254-.268-5.269-4.583-9.424-9.858-9.492l-.816-.013C209.777,0.01,209.137,0,208.496,0C93.531,0,0.001,93.531,0.001,208.496s93.53,208.496,208.495,208.496s208.495-93.531,208.495-208.496c0-.635-.01-1.267-.021-1.9ZM62.414,89.515c4.725,4.102,7.563,10.093,7.563,16.596c0,12.131-9.869,22-22,22-3.145,0-6.202-.689-9.011-1.954c6.407-13.137,14.294-25.424,23.448-36.642ZM364.768,313.781c-5.935-4.016-9.724-10.811-9.724-18.234c0-12.131,9.869-22,22-22c2.725,0,5.356.501,7.825,1.444-5.207,13.766-11.977,26.77-20.101,38.79Zm26.18-57.855c-4.067-1.428-8.354-2.227-12.695-2.354-.403-.012-.806-.026-1.21-.026-.542,0-1.077.029-1.615.049-13.344.509-25.11,7.26-32.449,17.425-4.987,6.906-7.937,15.376-7.937,24.526c0,13.791,6.848,26.454,17.66,34.193-9.332,11.082-19.935,21.052-31.549,29.74-.822.615-1.635,1.24-2.467,1.842-31.012,22.428-69.08,35.67-110.192,35.67C104.559,396.991,20,312.433,20,208.496c0-16.276,2.085-32.073,5.983-47.148c1.463-5.657,3.174-11.215,5.136-16.655.012-.032.022-.065.034-.098.014.006.029.011.044.018c5.242,2.287,10.938,3.498,16.78,3.498c8.291,0,16.021-2.425,22.539-6.588c11.688-7.466,19.461-20.544,19.461-35.412c0-11.617-4.733-22.387-12.731-30.139-.451-.437-.906-.869-1.377-1.286c32.732-32.446,77.26-53.009,126.502-54.589c3.157,14.763,11.764,27.746,24.107,36.418-8.064,17.495-7.341,38.179,2.48,55.19c9.771,16.925,27.278,27.985,46.567,29.748c1.761,19.188,12.729,36.747,29.744,46.57c9.114,5.262,19.466,8.043,29.936,8.042c8.82-.001,17.392-1.897,25.258-5.544c8.676,12.343,21.661,20.947,36.427,24.102-.454,14.217-2.492,28.042-5.942,41.303Z'
					}
				}),
				h('path', {
					attrs: {
						'd': 'M246.475,314.259c29.775,0,54-24.224,54-54c0-12.961-4.593-24.868-12.233-34.185-9.911-12.087-24.952-19.815-41.767-19.815-29.775,0-54,24.224-54,54c0,13.232,4.792,25.361,12.721,34.762c9.914,11.753,24.736,19.238,41.279,19.238Zm0-88c18.748,0,34,15.252,34,34c0,18.747-15.252,34-34,34s-34-15.253-34-34c0-18.748,15.252-34,34-34Z'
					}
				})
			])
		])
	])
}

export const lightning = (): VNode => {
	return h('svg#lightning', {
		attrs: {
			'width': '900.000000pt',
			'height': '520.000000pt',
			'viewBox': '0 0 900.000000 520.000000',
			'preserveAspectRatio': 'xMidYMid meet'
		}
	}, [
		h('g', {
			attrs: {
				'transform': 'translate(0.000000,520.000000) scale(0.100000,-0.100000)',
				'fill': '#FFFFFF',
				'stroke': 'none'
			}
		}, [
			h('path#lightning', {
				attrs: {
					'd': 'M4372 5187 c-18 -8 -180 -322 -673 -1309 -414 -828 -649 -1308 -649\n-1327 0 -20 9 -37 31 -55 l31 -26 449 0 c448 0 450 0 444 -20 -6 -18 -187\n-452 -784 -1874 -121 -288 -170 -414 -165 -430 12 -38 45 -66 81 -66 25 0 43\n9 73 37 38 37 2689 3184 2723 3233 22 32 22 82 -2 111 l-19 24 -526 5 -525 5\n301 475 c165 261 381 603 481 760 260 409 250 388 198 441 l-29 29 -709 -1\nc-502 0 -715 -4 -731 -12z m1248 -163 c0 -3 -174 -279 -387 -612 -213 -334\n-440 -690 -505 -792 -76 -119 -118 -195 -118 -212 0 -15 11 -40 24 -55 l24\n-28 510 -5 511 -5 -98 -115 c-93 -110 -954 -1131 -1696 -2010 -192 -229 -369\n-438 -393 -465 l-43 -50 16 40 c9 22 77 186 151 365 487 1167 603 1448 608\n1473 5 22 1 34 -23 57 l-29 30 -446 0 c-245 0 -446 2 -446 5 0 3 268 541 595\n1195 l595 1190 575 0 c316 0 575 -3 575 -6z',
					'fill': '#FFFFFF',
				}
			})
		])
	])
}

export const lab = (): VNode => {
	return h('svg.shop-svg', {
		attrs: {
			'width': '200',
			'height': '252',
			'viewBox': '0 0 200 252'
		}
	}, [
		h('path', {
			attrs: {
				'd': 'M 113.340 11.556 C 113.012 12.411, 113.018 15.111, 113.353 17.556 C 113.935 21.807, 113.851 22, 111.426 22 C 109.325 22, 108.459 22.939, 106.388 27.464 C 104.055 32.560, 103.694 32.889, 101.025 32.355 C 97.420 31.634, 98.883 28.732, 79.628 74.779 C 71.054 95.282, 63.479 113.057, 62.795 114.279 C 62.060 115.590, 61.526 120.390, 61.490 126 C 61.444 133.305, 60.927 136.771, 59.251 141 L 57.073 146.500 59.589 148.580 L 62.105 150.659 60.053 155.867 C 58.924 158.731, 58 161.301, 58 161.579 C 58 162.446, 70.400 167.998, 72.336 167.999 C 73.596 168, 74.847 166.401, 76.323 162.908 C 78.393 158.009, 78.600 157.836, 81.778 158.351 C 85.027 158.879, 85.137 158.771, 88.551 151.694 C 90.460 147.737, 93.030 143.672, 94.261 142.659 C 101.402 136.788, 102.900 134.716, 106.953 125.111 C 109.305 119.537, 111.595 114.750, 112.042 114.474 C 112.489 114.198, 115.100 114.857, 117.844 115.939 C 123.445 118.146, 123.760 117.988, 126.381 111.662 C 127.288 109.475, 128.515 107.997, 129.236 108.227 C 129.931 108.448, 132.620 111.416, 135.212 114.822 C 146.209 129.274, 146.924 149.535, 136.985 165.023 C 132.720 171.670, 127.070 176.389, 118.334 180.602 L 111.169 184.058 71.834 184.667 C 50.200 185.002, 32.282 185.469, 32.017 185.705 C 31.360 186.287, 31.399 197.733, 32.060 198.393 C 32.349 198.683, 43.491 199.050, 56.820 199.210 L 81.053 199.500 80.777 212 L 80.500 224.500 47.821 225 C 16.794 225.475, 15.003 225.604, 12.383 227.562 C 8.168 230.711, 5.843 234.358, 5.663 238.105 L 5.500 241.500 100 241.500 L 194.500 241.500 194.281 237.763 C 194.007 233.069, 191.818 229.680, 187.361 227.050 C 184.050 225.097, 182.355 225, 151.443 225 L 119 225 119 219.134 L 119 213.268 124.992 211.083 C 128.288 209.881, 134.346 206.650, 138.454 203.902 C 166.459 185.172, 176.593 149.837, 162.482 120.124 C 157.535 109.708, 150.940 100.846, 143.690 94.874 C 140.285 92.070, 137.147 89.450, 136.715 89.053 C 136.283 88.655, 136.854 86.174, 137.983 83.539 C 140.407 77.884, 139.838 76.717, 133.283 73.907 L 129.038 72.088 132.366 64.294 C 134.197 60.007, 136.275 54.730, 136.986 52.566 C 138.225 48.790, 138.169 48.546, 135.586 46.487 L 132.895 44.341 134.998 39.006 C 136.896 34.189, 136.950 33.521, 135.551 32.123 C 134.152 30.724, 134.401 30.167, 138.118 26.380 C 140.381 24.074, 141.956 21.737, 141.616 21.188 C 140.871 19.982, 117.484 10, 115.405 10 C 114.598 10, 113.669 10.700, 113.340 11.556 M 118.426 17.120 C 118.083 17.675, 118.092 19.678, 118.447 21.571 C 118.961 24.307, 119.826 25.318, 122.669 26.506 C 124.635 27.328, 127.011 28, 127.948 28 C 129.621 28, 134.744 23.383, 133.921 22.616 C 132.171 20.988, 118.937 16.294, 118.426 17.120 M 110.161 30.547 C 109.522 31.948, 109 33.460, 109 33.908 C 109 34.688, 122.199 41.050, 126.634 42.408 C 128.329 42.927, 128.894 42.559, 129.380 40.623 C 129.716 39.283, 130.239 37.542, 130.541 36.754 C 130.939 35.716, 128.661 34.315, 122.258 31.661 C 117.399 29.648, 112.951 28, 112.373 28 C 111.794 28, 110.799 29.146, 110.161 30.547 M 98.267 42.750 C 95.164 50.123, 67.848 115.364, 67.350 116.593 C 67.106 117.193, 69.515 118.848, 72.703 120.268 C 81.138 124.027, 99.212 131.132, 99.474 130.792 C 100.892 128.944, 109.827 104.442, 109.163 104.221 C 104.791 102.764, 99.110 98.890, 97.258 96.102 C 93.936 91.103, 94.103 83.220, 97.619 79.041 C 101.236 74.743, 105.043 73, 110.815 73 C 114.246 73, 116.512 73.615, 118.320 75.037 L 120.910 77.074 122.456 74.085 C 125.260 68.662, 132 52.678, 132 51.451 C 132 50.350, 103.860 38, 101.351 38 C 100.755 38, 99.367 40.138, 98.267 42.750 M 106.388 77.959 C 99.789 80.692, 97.867 90.021, 102.872 95.026 C 106.859 99.013, 110.149 99.635, 114.737 97.270 C 119.689 94.718, 122.043 88.915, 119.900 84.540 C 117.352 79.335, 110.786 76.137, 106.388 77.959 M 125.923 79.144 C 125.292 80.323, 125.010 83.039, 125.297 85.180 C 126.062 90.883, 124.396 95.536, 120.077 99.761 C 117.974 101.817, 115.690 104.589, 115 105.921 C 113.923 108.001, 114.003 108.529, 115.565 109.671 C 118.127 111.545, 121.666 111.324, 122.313 109.250 C 122.614 108.287, 125.366 101.477, 128.430 94.116 C 131.493 86.754, 134 80.578, 134 80.391 C 134 79.992, 128.340 77, 127.585 77 C 127.302 77, 126.554 77.965, 125.923 79.144 M 132.685 97.534 C 131.758 99.478, 131 101.572, 131 102.187 C 131 102.803, 133.272 105.709, 136.049 108.645 C 145.787 118.942, 150.520 134.382, 148.188 148.250 C 145.501 164.233, 135.766 177.122, 120.889 184.395 L 112.073 188.705 115.089 192.807 C 116.935 195.316, 118.417 198.876, 118.907 201.975 C 119.347 204.761, 119.931 207.265, 120.204 207.538 C 120.477 207.811, 124.480 206.153, 129.100 203.855 C 140.656 198.106, 152.466 186.460, 157.446 175.901 C 164.334 161.298, 165.807 147.383, 162.028 132.609 C 158.933 120.509, 153.804 111.736, 144.276 102.250 C 139.719 97.713, 135.626 94, 135.180 94 C 134.735 94, 133.612 95.590, 132.685 97.534 M 66.414 125.363 C 66.083 126.227, 66.225 128.175, 66.730 129.691 C 67.506 132.019, 69.275 133.099, 78.075 136.624 C 88.842 140.937, 89.900 140.978, 93.302 137.218 C 95.048 135.289, 94.844 135.154, 82.511 130.083 C 75.597 127.240, 69.282 124.662, 68.478 124.353 C 67.667 124.042, 66.749 124.491, 66.414 125.363 M 64.192 140.725 C 63.564 142.773, 63.376 144.754, 63.775 145.126 C 64.174 145.498, 68.507 147.449, 73.404 149.461 C 82.857 153.343, 83.274 153.296, 84.636 148.177 C 84.975 146.899, 84.859 145.475, 84.377 145.013 C 83.725 144.387, 66.297 137, 65.473 137 C 65.398 137, 64.821 138.676, 64.192 140.725 M 65.371 155.654 C 63.762 159.506, 63.981 159.975, 68.238 161.783 C 70.777 162.862, 71.091 162.725, 72.549 159.905 C 74.543 156.050, 74.201 155.124, 70.156 153.424 C 66.889 152.050, 66.874 152.057, 65.371 155.654 M 36.362 190.500 C 36.045 191.325, 36.045 192.675, 36.362 193.500 C 36.850 194.773, 40.412 195, 59.912 195 C 82.520 195, 82.911 194.965, 84.443 192.777 C 85.299 191.555, 86 190.205, 86 189.777 C 86 189.350, 74.961 189, 61.469 189 C 40.585 189, 36.852 189.223, 36.362 190.500 M 92.299 191.900 C 86.315 195.659, 85.653 198.377, 85.848 218.363 C 85.943 228.188, 86.268 236.625, 86.570 237.113 C 86.871 237.601, 93.166 238, 100.559 238 L 114 238 113.994 220.250 C 113.988 199.959, 113.242 196.021, 108.807 192.862 C 104.381 189.711, 96.513 189.253, 92.299 191.900 M 98 196.709 C 92.671 198.669, 91.264 205.020, 95.314 208.826 C 100.994 214.162, 109.237 207.993, 106.379 200.545 C 105.866 199.210, 100.848 195.803, 99.800 196.079 C 99.635 196.122, 98.825 196.406, 98 196.709 M 97.408 202.378 C 96.599 204.487, 97.735 206, 100.129 206 C 101.639 206, 102.060 205.443, 101.820 203.760 C 101.447 201.146, 98.264 200.149, 97.408 202.378 M 16.014 230.744 C 14.097 231.710, 11.974 233.625, 11.297 235 L 10.066 237.500 44.277 237.763 C 63.093 237.908, 79.080 237.799, 79.805 237.521 C 80.655 237.195, 81.011 235.683, 80.811 233.258 L 80.500 229.500 50 229.244 C 22.583 229.013, 19.148 229.165, 16.014 230.744 M 119 233.592 L 119 238.286 154.029 237.781 C 173.294 237.504, 189.359 236.975, 189.727 236.606 C 190.096 236.237, 188.950 234.488, 187.181 232.718 L 183.964 229.500 151.482 229.199 L 119 228.897 119 233.592',
				'stroke': 'none',
				'fill': '#BEBEBD',
				'fill-rule': 'evenodd'
			}
		})
	])
}

export const mine = (): VNode => {
	return h('svg.shop-svg', {
		attrs: {
			'width': '612',
			'height': '612',
			'viewBox': '0 0 612 612'
		}
	}, [
		h('path', {
			attrs: {
				'd': 'M 232.500 114.346 C 267.643 132.826, 303.207 154.799, 327.500 173.042 C 340.876 183.087, 358.899 198.184, 364.981 204.438 C 368.826 208.393, 369.286 209.290, 368.223 210.773 C 365.643 214.373, 364.765 216.929, 365.333 219.190 C 365.655 220.475, 371.267 226.808, 377.802 233.263 C 390.837 246.137, 392.548 246.934, 397.751 242.556 L 400.656 240.112 408.683 248.306 C 434.738 274.902, 465.388 318.731, 491.215 366.326 C 495.146 373.572, 500.076 382.650, 502.169 386.500 C 504.261 390.350, 505.980 392.930, 505.987 392.233 C 506.016 389.431, 500.740 366.883, 497.859 357.500 C 483.090 309.391, 460.413 268.369, 427.152 229.590 L 419.803 221.023 422.402 217.935 C 427.280 212.137, 426.404 210.106, 413.303 196.843 C 402.796 186.205, 401.250 185, 398.108 185 C 395.663 185, 393.754 185.819, 391.768 187.722 C 389.740 189.665, 388.548 190.166, 387.602 189.472 C 386.874 188.937, 381.862 184.787, 376.465 180.249 C 337.267 147.285, 284.033 120.987, 234.200 109.967 C 219.674 106.755, 219.401 107.458, 232.500 114.346 M 404.612 182.819 C 403.931 183.920, 426.408 206.258, 427.300 205.367 C 427.685 204.982, 428 203.513, 428 202.103 C 428 198.335, 411.610 182, 407.830 182 C 406.338 182, 404.890 182.369, 404.612 182.819 M 240.745 345.775 C 169.831 416.708, 119 468.300, 119 469.342 C 119 472.293, 120.981 475.182, 127.400 481.591 C 134.781 488.961, 138.316 491.353, 140.701 490.591 C 141.690 490.275, 197.287 435.225, 264.248 368.258 L 385.996 246.500 375.069 235.524 C 369.059 229.487, 363.771 224.424, 363.316 224.272 C 362.862 224.121, 307.705 278.797, 240.745 345.775',
				'stroke': 'none',
				'fill': '#BEBEBD',
				'fill-rule': 'evenodd'
			}
		}),
		// h('path', {
		// 	attrs: {
		// 		'd': 'M -0 306.002 L -0 612.003 306.250 611.752 L 612.500 611.500 612.752 305.750 L 613.003 -0 306.502 -0 L 0 0 -0 306.002 M 0.494 306.500 C 0.494 474.800, 0.609 543.501, 0.750 459.169 C 0.891 374.837, 0.891 237.137, 0.750 153.169 C 0.609 69.201, 0.494 138.200, 0.494 306.500 M 232.500 114.346 C 267.643 132.826, 303.207 154.799, 327.500 173.042 C 340.876 183.087, 358.899 198.184, 364.981 204.438 C 368.826 208.393, 369.286 209.290, 368.223 210.773 C 365.643 214.373, 364.765 216.929, 365.333 219.190 C 365.655 220.475, 371.267 226.808, 377.802 233.263 C 390.837 246.137, 392.548 246.934, 397.751 242.556 L 400.656 240.112 408.683 248.306 C 434.738 274.902, 465.388 318.731, 491.215 366.326 C 495.146 373.572, 500.076 382.650, 502.169 386.500 C 504.261 390.350, 505.980 392.930, 505.987 392.233 C 506.016 389.431, 500.740 366.883, 497.859 357.500 C 483.090 309.391, 460.413 268.369, 427.152 229.590 L 419.803 221.023 422.402 217.935 C 427.280 212.137, 426.404 210.106, 413.303 196.843 C 402.796 186.205, 401.250 185, 398.108 185 C 395.663 185, 393.754 185.819, 391.768 187.722 C 389.740 189.665, 388.548 190.166, 387.602 189.472 C 386.874 188.937, 381.862 184.787, 376.465 180.249 C 337.267 147.285, 284.033 120.987, 234.200 109.967 C 219.674 106.755, 219.401 107.458, 232.500 114.346 M 404.612 182.819 C 403.931 183.920, 426.408 206.258, 427.300 205.367 C 427.685 204.982, 428 203.513, 428 202.103 C 428 198.335, 411.610 182, 407.830 182 C 406.338 182, 404.890 182.369, 404.612 182.819 M 240.745 345.775 C 169.831 416.708, 119 468.300, 119 469.342 C 119 472.293, 120.981 475.182, 127.400 481.591 C 134.781 488.961, 138.316 491.353, 140.701 490.591 C 141.690 490.275, 197.287 435.225, 264.248 368.258 L 385.996 246.500 375.069 235.524 C 369.059 229.487, 363.771 224.424, 363.316 224.272 C 362.862 224.121, 307.705 278.797, 240.745 345.775',
		// 		'stroke': 'none',
		// 		'fill': '#fbfbfb',
		// 		'fill-rule': 'evenodd'
		// 	}
		// })
	])
}

export const shipment = (): VNode => {
	return h('svg.shop-svg', {
		attrs: {
			'width': '250',
			'height': '201',
			'viewBox': '0 0 250 201'
		}
	}, [
		h('path', {
			attrs: {
				'd': 'M 123.454 0.765 C 121.468 2.160, 73.898 88.233, 74.212 89.864 C 74.491 91.315, 77.215 91.530, 98.263 91.768 L 122 92.036 122 101.018 L 122 110 107.065 110 C 98.851 110, 91.019 110.422, 89.661 110.939 C 85.710 112.441, 83.653 115.288, 73.996 132.614 L 64.879 148.972 32.690 149.236 C 2.928 149.480, 0.500 149.631, 0.500 151.232 C 0.500 152.185, 8.521 163.775, 18.325 176.987 L 36.150 201.011 123.304 200.755 L 210.458 200.500 230.651 176 C 241.757 162.525, 250.879 150.961, 250.922 150.302 C 250.981 149.394, 243.042 149.087, 218.250 149.038 C 188.710 148.979, 185.377 148.807, 184.241 147.282 C 183.548 146.353, 179.322 138.958, 174.851 130.849 C 170.379 122.741, 165.405 114.845, 163.797 113.303 L 160.874 110.500 144.437 110.183 L 128 109.865 128 107.453 L 128 105.041 148.206 104.771 L 168.412 104.500 169.289 100.500 C 170.559 94.703, 168.385 72.708, 165.404 61.197 C 160.128 40.825, 149.693 22.556, 135.160 8.250 C 126.945 0.163, 125.566 -0.718, 123.454 0.765 M 128.081 54 L 128.081 96.500 131.017 93.066 C 137.310 85.706, 140 76.276, 140 61.582 C 140 50.106, 137.843 37.310, 133.948 25.686 C 127.913 7.672, 128.080 6.866, 128.081 54 M 101.779 50.259 L 82.058 85.500 101.674 85.772 C 112.463 85.921, 121.456 85.878, 121.658 85.675 C 121.860 85.473, 121.908 69.492, 121.763 50.163 L 121.500 15.018 101.779 50.259 M 139.428 23 C 139.785 24.375, 140.929 28.715, 141.971 32.645 C 148.894 58.764, 146.842 81.736, 136.335 95.750 L 133.898 99 148.949 99 L 164 99 163.994 92.250 C 163.980 75.956, 159.367 56.475, 151.977 41.500 C 146.819 31.048, 138.231 18.387, 139.428 23 M 89.340 118.250 C 87.484 120.328, 72 147.330, 72 148.487 C 72 149.168, 176.515 149.152, 177.196 148.471 C 177.826 147.841, 162.896 120.648, 160.414 117.905 C 158.784 116.103, 156.861 116, 125.019 116 C 91.363 116, 91.348 116.001, 89.340 118.250 M 92 130.500 C 89.746 133.216, 92.526 135, 99.015 135 C 105.108 135, 107.302 133.274, 104.895 130.373 C 103.293 128.443, 93.628 128.538, 92 130.500 M 119.152 129.885 C 118.410 130.355, 117.966 131.586, 118.165 132.620 C 118.475 134.229, 119.460 134.500, 125 134.500 C 130.540 134.500, 131.525 134.229, 131.835 132.620 C 132.326 130.066, 130.354 129.031, 125 129.031 C 122.525 129.031, 119.893 129.415, 119.152 129.885 M 145.011 130.487 C 144.332 131.305, 144.046 132.677, 144.375 133.535 C 144.848 134.767, 146.294 135.033, 151.227 134.798 C 156.419 134.551, 157.541 134.181, 157.838 132.620 C 158.035 131.586, 157.590 130.355, 156.848 129.885 C 154.565 128.438, 146.365 128.855, 145.011 130.487 M 0.079 151.583 C 0.127 152.748, 0.364 152.985, 0.683 152.188 C 0.972 151.466, 0.936 150.603, 0.604 150.271 C 0.272 149.939, 0.036 150.529, 0.079 151.583 M 9.700 155.405 C 10.140 156.178, 16.800 165.374, 24.500 175.841 L 38.500 194.872 123.064 194.936 L 207.628 195 223.564 175.425 C 232.329 164.658, 239.650 155.433, 239.833 154.925 C 240.036 154.362, 194.908 154, 124.534 154 C 25.513 154, 9.016 154.202, 9.700 155.405 M 54.020 161.752 C 44.161 166.705, 43.268 181.294, 52.474 186.984 C 59.525 191.342, 70.053 188.624, 73.394 181.583 C 78.095 171.675, 71.121 160.003, 60.500 160.003 C 58.850 160.003, 55.934 160.790, 54.020 161.752 M 97.020 161.752 C 89.637 165.461, 86.568 175.791, 90.898 182.359 C 97.039 191.674, 111.819 191.224, 116.394 181.583 C 121.095 171.675, 114.121 160.003, 103.500 160.003 C 101.850 160.003, 98.934 160.790, 97.020 161.752 M 140.500 161.412 C 135.266 163.738, 132.713 167.413, 132.223 173.329 C 131.412 183.108, 136.836 188.989, 146.673 188.996 C 150.799 188.999, 152.477 188.469, 154.959 186.381 C 159.538 182.528, 161.313 178.473, 160.721 173.220 C 159.589 163.170, 149.629 157.354, 140.500 161.412 M 183.450 161.407 C 181.773 162.137, 179.186 164.179, 177.700 165.944 C 175.526 168.528, 175.001 170.162, 175.004 174.327 C 175.011 183.724, 180.357 189, 189.874 189 C 198.366 189, 204.688 181.796, 203.721 173.220 C 202.587 163.156, 192.684 157.385, 183.450 161.407 M 54.455 168.455 C 50.575 172.335, 50.813 177.300, 55.069 181.250 C 58.625 184.551, 61.790 184.740, 65.440 181.869 C 69.319 178.817, 70.288 175.626, 68.578 171.533 C 66.081 165.555, 58.916 163.994, 54.455 168.455 M 98.750 167.080 C 96.079 168.636, 93.870 173.633, 94.588 176.494 C 95.399 179.725, 100.475 184, 103.500 184 C 104.791 184, 107.231 182.835, 108.923 181.411 C 115.086 176.225, 111.663 165.958, 103.795 166.030 C 101.983 166.047, 99.712 166.519, 98.750 167.080 M 141.159 167.601 C 135.953 171.247, 136.444 179.627, 142.034 182.517 C 146.110 184.625, 148.409 184.368, 151.923 181.411 C 160.485 174.207, 150.329 161.178, 141.159 167.601 M 183.747 167.984 C 178.719 171.939, 179.492 179.652, 185.214 182.611 C 191.168 185.690, 198 181.259, 198 174.320 C 198 167.206, 189.525 163.439, 183.747 167.984',
				'stroke': 'none',
				'fill': '#BEBEBD',
				'fill-rule': 'evenodd'
			}
		}),
		// h('path', {
		// 	attrs: {
		// 		'd': 'M -0 74.750 L -0.001 149.500 32.446 149.223 L 64.894 148.947 74.004 132.601 C 83.653 115.288, 85.711 112.441, 89.661 110.939 C 91.019 110.422, 98.851 110, 107.065 110 L 122 110 122 101.018 L 122 92.036 98.263 91.768 C 77.215 91.530, 74.491 91.315, 74.212 89.864 C 73.898 88.233, 121.468 2.160, 123.454 0.765 C 124.029 0.361, 96.487 0.024, 62.250 0.015 L 0 0 -0 74.750 M 135.160 8.250 C 149.693 22.556, 160.128 40.825, 165.404 61.197 C 168.385 72.708, 170.559 94.703, 169.289 100.500 L 168.412 104.500 148.206 104.771 L 128 105.041 128 107.453 L 128 109.865 144.483 110.183 L 160.967 110.500 163.934 113.500 C 165.566 115.150, 170.906 123.700, 175.801 132.500 L 184.701 148.500 217.351 149 L 250.001 149.500 250.001 74.750 L 250 0 188.389 -0 L 126.779 -0 135.160 8.250 M 128.081 54 L 128.081 96.500 131.017 93.066 C 137.310 85.706, 140 76.276, 140 61.582 C 140 50.106, 137.843 37.310, 133.948 25.686 C 127.913 7.672, 128.080 6.866, 128.081 54 M 101.779 50.259 L 82.058 85.500 101.674 85.772 C 112.463 85.921, 121.456 85.878, 121.658 85.675 C 121.860 85.473, 121.908 69.492, 121.763 50.163 L 121.500 15.018 101.779 50.259 M 139.428 23 C 139.785 24.375, 140.929 28.715, 141.971 32.645 C 148.894 58.764, 146.842 81.736, 136.335 95.750 L 133.898 99 148.949 99 L 164 99 163.994 92.250 C 163.980 75.956, 159.367 56.475, 151.977 41.500 C 146.819 31.048, 138.231 18.387, 139.428 23 M 89.340 118.250 C 87.484 120.328, 72 147.330, 72 148.487 C 72 149.168, 176.515 149.152, 177.196 148.471 C 177.826 147.841, 162.896 120.648, 160.414 117.905 C 158.784 116.103, 156.861 116, 125.019 116 C 91.363 116, 91.348 116.001, 89.340 118.250 M 92 130.500 C 89.746 133.216, 92.526 135, 99.015 135 C 105.108 135, 107.302 133.274, 104.895 130.373 C 103.293 128.443, 93.628 128.538, 92 130.500 M 119.152 129.885 C 118.410 130.355, 117.966 131.586, 118.165 132.620 C 118.475 134.229, 119.460 134.500, 125 134.500 C 130.540 134.500, 131.525 134.229, 131.835 132.620 C 132.326 130.066, 130.354 129.031, 125 129.031 C 122.525 129.031, 119.893 129.415, 119.152 129.885 M 145.011 130.487 C 144.332 131.305, 144.046 132.677, 144.375 133.535 C 144.848 134.767, 146.294 135.033, 151.227 134.798 C 156.419 134.551, 157.541 134.181, 157.838 132.620 C 158.035 131.586, 157.590 130.355, 156.848 129.885 C 154.565 128.438, 146.365 128.855, 145.011 130.487 M 0 176.800 L 0 201 18.122 201 C 32.485 201, 36.038 200.741, 35.248 199.750 C 34.700 199.063, 26.932 188.600, 17.986 176.500 C 9.040 164.400, 1.334 154.072, 0.861 153.550 C 0.377 153.017, 0 163.211, 0 176.800 M 229.686 177 L 210.077 201 230.039 201 L 250 201 250 177 C 250 163.800, 249.841 153, 249.647 153 C 249.453 153, 240.471 163.800, 229.686 177 M 9.700 155.405 C 10.140 156.178, 16.800 165.374, 24.500 175.841 L 38.500 194.872 123.064 194.936 L 207.628 195 223.564 175.425 C 232.329 164.658, 239.650 155.433, 239.833 154.925 C 240.036 154.362, 194.908 154, 124.534 154 C 25.513 154, 9.016 154.202, 9.700 155.405 M 54.020 161.752 C 44.161 166.705, 43.268 181.294, 52.474 186.984 C 59.525 191.342, 70.053 188.624, 73.394 181.583 C 78.095 171.675, 71.121 160.003, 60.500 160.003 C 58.850 160.003, 55.934 160.790, 54.020 161.752 M 97.020 161.752 C 89.637 165.461, 86.568 175.791, 90.898 182.359 C 97.039 191.674, 111.819 191.224, 116.394 181.583 C 121.095 171.675, 114.121 160.003, 103.500 160.003 C 101.850 160.003, 98.934 160.790, 97.020 161.752 M 140.500 161.412 C 135.266 163.738, 132.713 167.413, 132.223 173.329 C 131.412 183.108, 136.836 188.989, 146.673 188.996 C 150.799 188.999, 152.477 188.469, 154.959 186.381 C 159.538 182.528, 161.313 178.473, 160.721 173.220 C 159.589 163.170, 149.629 157.354, 140.500 161.412 M 183.450 161.407 C 181.773 162.137, 179.186 164.179, 177.700 165.944 C 175.526 168.528, 175.001 170.162, 175.004 174.327 C 175.011 183.724, 180.357 189, 189.874 189 C 198.366 189, 204.688 181.796, 203.721 173.220 C 202.587 163.156, 192.684 157.385, 183.450 161.407 M 54.455 168.455 C 50.575 172.335, 50.813 177.300, 55.069 181.250 C 58.625 184.551, 61.790 184.740, 65.440 181.869 C 69.319 178.817, 70.288 175.626, 68.578 171.533 C 66.081 165.555, 58.916 163.994, 54.455 168.455 M 98.750 167.080 C 96.079 168.636, 93.870 173.633, 94.588 176.494 C 95.399 179.725, 100.475 184, 103.500 184 C 104.791 184, 107.231 182.835, 108.923 181.411 C 115.086 176.225, 111.663 165.958, 103.795 166.030 C 101.983 166.047, 99.712 166.519, 98.750 167.080 M 141.159 167.601 C 135.953 171.247, 136.444 179.627, 142.034 182.517 C 146.110 184.625, 148.409 184.368, 151.923 181.411 C 160.485 174.207, 150.329 161.178, 141.159 167.601 M 183.747 167.984 C 178.719 171.939, 179.492 179.652, 185.214 182.611 C 191.168 185.690, 198 181.259, 198 174.320 C 198 167.206, 189.525 163.439, 183.747 167.984',
		// 		'stroke': 'none',
		// 		'fill': '#fafafa',
		// 		'fill-rule': 'evenodd'
		// 	}
		// })
	])
}

export const svgs: { [key: string]: VNode } = {
	"Factory": factory(),
	"Cursor": cursor(),
	"Baker": baker(),
	"Cookie": cookie(),
	"Lightning": lightning(),
	"Lab": lab(),
	"Mine": mine(),
	"Shipment": shipment()
};
