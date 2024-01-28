#!/bin/bash

# 检查是否安装了 ffmpeg
if ! command -v ffmpeg &> /dev/null; then
    echo "错误: 未找到 ffmpeg。请先安装 ffmpeg。"
    exit 1
fi

# 获取视频文件路径和生成的文件名
input_filepath=$1
output_filename=$2

# 检查输入参数
if [ -z "$input_filepath" ] || [ -z "$output_filename" ]; then
    echo "请提供视频文件路径和生成的文件名作为参数。"
    exit 1
fi

# 检查输入文件是否存在
if [ ! -f "$input_filepath" ]; then
    echo "错误: 文件 '$input_filepath' 不存在。请提供有效的视频文件路径。"
    exit 1
fi

# 检查输出目录是否存在，如果不存在则创建
output_dir="./$output_filename"
mkdir -p "$output_dir"

# 执行 ffmpeg 命令将视频转换为 ts
ffmpeg -y -i "$input_filepath" -vcodec copy -acodec copy -vbsf h264_mp4toannexb "$output_dir/$output_filename.ts"

# 执行 ffmpeg 命令生成 M3U8 文件列表
ffmpeg -i "$output_dir/$output_filename.ts" -c copy -map 0 -f segment -segment_list "$output_dir/playlist.m3u8" -segment_time 5 "$output_dir/$output_filename%03d.ts"

# 找到并删除最大的 TS 文件
max_ts_file=$(ls -S "$output_dir"/*.ts | head -n 1)
rm -f "$max_ts_file"

echo "转换完成，M3U8 文件列表已生成：$output_dir/playlist.m3u8"
