# cd ..
python train.py \
    --config=configs/nerf_synthetic.txt \
    --datadir=data/nerf_synthetic/$1/ \
    --expname=$1