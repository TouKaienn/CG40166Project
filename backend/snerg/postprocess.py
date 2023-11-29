from skimage.io import imread, imsave
import os
import numpy as np

def main(args):
    model = args.model
    style_name = args.style_name
    
    style_img_path = f"StyleRF/log_style/{model}/{model}/{style_name}"
    ori_img_path = f"StyleRF/data/nerf_synthetic/{model}"
    
    splits = ['train', 'test']
    for split in splits: 
        img_files = [i for i in os.listdir(os.path.join(style_img_path, split)) if i.endswith(".png")]
        for img_file in img_files:
            rgb = imread(os.path.join(style_img_path, split, img_file))
            rgba = imread(os.path.join(ori_img_path, split, img_file))
            a = rgba[:, :, 3]
            new_rgba = np.dstack((rgb, a))
            imsave(os.path.join(style_img_path, split, img_file), new_rgba)
            

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", type=str, default="lego", help="model name")
    parser.add_argument("--style_name", type=str, default="lego", help="style name")
    args = parser.parse_args()
    main(args)