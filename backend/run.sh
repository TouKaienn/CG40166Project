model=$1 # e.g. lego, which is a folder in data/nerf_synthetic
style_file=$2 # e.g. starry.jpeg, which is a file in data/ref_case
style_name=$(echo $style_file | cut -d'.' -f1) # e.g. starry

# StyleRF
cd StyleRF
bash scripts/train.sh $model
bash scripts/train_feature.sh $model
bash scripts/train_style.sh $model $style_file
bash scripts/test_style.sh $model $style_file

# SNeRG
cd ..
cp StyleRF/data/nerf_synthetic/$model/transforms_train.json StyleRF/log_style/$model/$model/$style_name/transforms_train.json
cp StyleRF/data/nerf_synthetic/$model/transforms_test.json StyleRF/log_style/$model/$model/$style_name/transforms_test.json
# Get NeRF
python -m snerg.train \
    --data_dir=StyleRF/log_style/$model/$model/$style_name \
    --train_dir=tmp/$model/$style_name \
    --config configs/blender
# Baking
python -m snerg.bake \
    --data_dir=StyleRF/log_style/$model/$model/$style_name \
    --train_dir=tmp/$model/$style_name \
    --config configs/blender